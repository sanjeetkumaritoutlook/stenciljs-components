import { newSpecPage } from '@stencil/core/testing';
import { ComplexIonicForm } from '../complex-ionic-form';

describe('complex-ionic-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ComplexIonicForm],
      html: `<complex-ionic-form></complex-ionic-form>`,
    });
    expect(page.root).toEqualHtml(`
      <complex-ionic-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </complex-ionic-form>
    `);
  });
});
