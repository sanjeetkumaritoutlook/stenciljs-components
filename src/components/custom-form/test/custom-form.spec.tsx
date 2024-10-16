import { newSpecPage } from '@stencil/core/testing';
import { CustomForm } from '../custom-form';

describe('custom-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomForm],
      html: `<custom-form></custom-form>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-form>
    `);
  });
});
