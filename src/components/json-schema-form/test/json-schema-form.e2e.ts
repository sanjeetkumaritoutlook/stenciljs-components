import { newE2EPage } from '@stencil/core/testing';

describe('json-schema-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<json-schema-form></json-schema-form>');

    const element = await page.find('json-schema-form');
    expect(element).toHaveClass('hydrated');
  });
});
