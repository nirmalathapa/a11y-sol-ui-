import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<button></button>`,
    });
    expect(page.root).toEqualHtml(`
      <button>
        <mock:shadow-root>
          <div>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </button>
    `);
  });
});