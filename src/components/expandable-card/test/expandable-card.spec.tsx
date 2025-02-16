import { newSpecPage } from '@stencil/core/testing';
import { ExpandableCard } from '../expandable-card';

describe('expandable-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExpandableCard],
      html: `<expandable-card></expandable-card>`,
    });
    expect(page.root).toEqualHtml(`
      <expandable-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </expandable-card>
    `);
  });
});
