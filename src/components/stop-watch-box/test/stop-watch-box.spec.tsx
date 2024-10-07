import { newSpecPage } from '@stencil/core/testing';
import { StopWatchBox } from '../stop-watch-box';

describe('stop-watch-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StopWatchBox],
      html: `<stop-watch-box></stop-watch-box>`,
    });
    expect(page.root).toEqualHtml(`
      <stop-watch-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stop-watch-box>
    `);
  });
});
