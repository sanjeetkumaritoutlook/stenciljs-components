import { newSpecPage } from '@stencil/core/testing';
import { MyRichTextEditor } from '../my-rich-text-editor';

describe('my-rich-text-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRichTextEditor],
      html: `<my-rich-text-editor></my-rich-text-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <my-rich-text-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-rich-text-editor>
    `);
  });
});
