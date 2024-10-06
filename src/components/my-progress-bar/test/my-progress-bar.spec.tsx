import { newSpecPage } from '@stencil/core/testing';
import { MyProgressBar } from '../my-progress-bar';

describe('my-progress-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProgressBar],
      html: `<my-progress-bar></my-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <my-progress-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-progress-bar>
    `);
  });
});
