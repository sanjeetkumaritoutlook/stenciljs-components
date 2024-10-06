import { newSpecPage } from '@stencil/core/testing';
import { MyCard } from '../my-card';

describe('my-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCard],
      html: `<my-card></my-card>`,
    });
    expect(page.root).toEqualHtml(`
      <my-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-card>
    `);
  });
});
