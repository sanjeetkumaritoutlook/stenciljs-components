import { newSpecPage } from '@stencil/core/testing';
import { StopWatch } from '../stop-watch';

describe('stop-watch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StopWatch],
      html: `<stop-watch></stop-watch>`,
    });
    expect(page.root).toEqualHtml(`
      <stop-watch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stop-watch>
    `);
  });
});
