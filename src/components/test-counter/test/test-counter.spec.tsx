import { newSpecPage } from '@stencil/core/testing';
import { TestCounter } from '../test-counter';

describe('test-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestCounter],
      html: `<test-counter></test-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <test-counter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-counter>
    `);
  });
});
