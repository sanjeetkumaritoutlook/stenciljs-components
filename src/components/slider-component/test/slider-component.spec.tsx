import { newSpecPage } from '@stencil/core/testing';
import { SliderComponent } from '../slider-component';

describe('slider-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SliderComponent],
      html: `<slider-component></slider-component>`,
    });
    expect(page.root).toEqualHtml(`
      <slider-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </slider-component>
    `);
  });
});
