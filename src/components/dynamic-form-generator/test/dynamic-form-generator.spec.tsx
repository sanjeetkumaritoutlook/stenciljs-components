import { newSpecPage } from '@stencil/core/testing';
import { DynamicFormGenerator } from '../dynamic-form-generator';

describe('dynamic-form-generator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DynamicFormGenerator],
      html: `<dynamic-form-generator></dynamic-form-generator>`,
    });
    expect(page.root).toEqualHtml(`
      <dynamic-form-generator>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dynamic-form-generator>
    `);
  });
});
