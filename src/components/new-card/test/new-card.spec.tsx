import { newSpecPage } from '@stencil/core/testing';
import { NewCard } from '../new-card';

describe('new-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewCard],
      html: `<new-card></new-card>`,
    });
    expect(page.root).toEqualHtml(`
      <new-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-card>
    `);
  });
});
