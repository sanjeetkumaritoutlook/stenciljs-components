import { newSpecPage } from '@stencil/core/testing';
import { MyDatepicker } from '../my-datepicker';

describe('my-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDatepicker],
      html: `<my-datepicker></my-datepicker>`,
    });
    expect(page.root).toEqualHtml(`
      <my-datepicker>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-datepicker>
    `);
  });
});
