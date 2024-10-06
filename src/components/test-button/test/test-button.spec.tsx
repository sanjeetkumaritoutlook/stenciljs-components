import { newSpecPage } from '@stencil/core/testing';
import { TestButton } from '../test-button';

describe('test-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestButton],
      html: `<test-button></test-button>`,
    });
    expect(page.root).toEqualHtml(`
      <test-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-button>
    `);
  });
});
