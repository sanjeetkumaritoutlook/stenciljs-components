import { newSpecPage } from '@stencil/core/testing';
import { SearchWorld } from '../search-world';

describe('search-world', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchWorld],
      html: `<search-world></search-world>`,
    });
    expect(page.root).toEqualHtml(`
      <search-world>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </search-world>
    `);
  });
});
