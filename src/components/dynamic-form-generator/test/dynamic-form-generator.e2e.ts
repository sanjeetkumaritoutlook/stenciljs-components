import { newE2EPage } from '@stencil/core/testing';

describe('dynamic-form-generator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dynamic-form-generator></dynamic-form-generator>');

    const element = await page.find('dynamic-form-generator');
    expect(element).toHaveClass('hydrated');
  });
});
