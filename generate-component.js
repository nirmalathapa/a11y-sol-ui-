const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
  console.error('Please provide a component name');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'packages', 'components', 'src', 'components', componentName);

if (fs.existsSync(componentDir)) {
  console.error(`Component ${componentName} already exists`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const componentContent = `import { Component, h } from '@stencil/core';

@Component({
  tag: '${componentName}',
  styleUrl: '${componentName}.scss',
  shadow: true,
})
export class ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}`;

const scssContent = `:host {
  display: block;
}`;

const specContent = `import { newSpecPage } from '@stencil/core/testing';
import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from './${componentName}';

describe('${componentName}', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [${componentName.charAt(0).toUpperCase() + componentName.slice(1)}],
      html: \`<${componentName}></${componentName}>\`,
    });
    expect(page.root).toEqualHtml(\`
      <${componentName}>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </${componentName}>
    \`);
  });
});`;

const e2eContent = `import { newE2EPage } from '@stencil/core/testing';

describe('${componentName}', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<${componentName}></${componentName}>');

    const element = await page.find('${componentName}');
    expect(element).toHaveClass('hydrated');
  });
});`;

fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), componentContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.scss`), scssContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.spec.tsx`), specContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.e2e.ts`), e2eContent);

console.log(`Component ${componentName} created successfully`);
