import { newSpecPage } from '@stencil/core/testing';
import { NiceAlert } from '../nice-alert';

describe('nice-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NiceAlert],
      html: `<nice-alert></nice-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <nice-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nice-alert>
    `);
  });
});
