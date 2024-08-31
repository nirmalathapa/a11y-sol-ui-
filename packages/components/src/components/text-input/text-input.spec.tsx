import { newSpecPage } from '@stencil/core/testing';
import { Text-input } from './text-input';

describe('text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Text-input],
      html: `<text-input></text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <text-input>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </text-input>
    `);
  });
});