import { newSpecPage } from '@stencil/core/testing';
import { LazyImg } from '../lazy-img';

describe('lazy-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LazyImg],
      html: `<lazy-img></lazy-img>`,
    });
    expect(page.root).toEqualHtml(`
      <lazy-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lazy-img>
    `);
  });
});
