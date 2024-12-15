import { newSpecPage } from '@stencil/core/testing';
import { JsonSchemaForm } from '../json-schema-form';

describe('json-schema-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JsonSchemaForm],
      html: `<json-schema-form></json-schema-form>`,
    });
    expect(page.root).toEqualHtml(`
      <json-schema-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </json-schema-form>
    `);
  });
});
