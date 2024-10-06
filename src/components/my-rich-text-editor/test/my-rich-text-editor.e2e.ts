import { newE2EPage } from '@stencil/core/testing';

describe('my-rich-text-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-rich-text-editor></my-rich-text-editor>');

    const element = await page.find('my-rich-text-editor');
    expect(element).toHaveClass('hydrated');
  });
});
