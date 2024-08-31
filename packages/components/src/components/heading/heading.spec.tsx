import { newSpecPage } from '@stencil/core/testing';
import { Heading } from './heading';

describe('heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Heading],
      html: `<heading></heading>`,
    });
    expect(page.root).toEqualHtml(`
      <heading>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </heading>
    `);
  });
});