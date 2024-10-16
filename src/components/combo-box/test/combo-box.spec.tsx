import { newSpecPage } from '@stencil/core/testing';
import { ComboBox } from '../combo-box';

describe('combo-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComboBox],
      html: `<combo-box></combo-box>`,
    });
    expect(page.root).toEqualHtml(`
      <combo-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </combo-box>
    `);
  });
});
