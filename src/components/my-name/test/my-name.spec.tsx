import { newSpecPage } from '@stencil/core/testing';
import { MyName } from '../my-name';

describe('my-name', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyName],
      html: `<my-name></my-name>`,
    });
    expect(page.root).toEqualHtml(`
      <my-name>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-name>
    `);
  });
});
