import { newSpecPage } from '@stencil/core/testing';
import { ParentComponent } from '../parent-component';

describe('parent-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ParentComponent],
      html: `<parent-component></parent-component>`,
    });
    expect(page.root).toEqualHtml(`
      <parent-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </parent-component>
    `);
  });
});
