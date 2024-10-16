import { newSpecPage } from '@stencil/core/testing';
import { SimpleForm } from '../simple-form';

describe('simple-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleForm],
      html: `<simple-form></simple-form>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-form>
    `);
  });
});
