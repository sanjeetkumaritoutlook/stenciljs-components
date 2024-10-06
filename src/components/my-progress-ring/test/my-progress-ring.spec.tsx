import { newSpecPage } from '@stencil/core/testing';
import { MyProgressRing } from '../my-progress-ring';

describe('my-progress-ring', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyProgressRing],
      html: `<my-progress-ring></my-progress-ring>`,
    });
    expect(page.root).toEqualHtml(`
      <my-progress-ring>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-progress-ring>
    `);
  });
});
