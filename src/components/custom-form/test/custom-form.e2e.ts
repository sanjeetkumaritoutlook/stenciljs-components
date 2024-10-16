import { newE2EPage } from '@stencil/core/testing';

describe('custom-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-form></custom-form>');

    const element = await page.find('custom-form');
    expect(element).toHaveClass('hydrated');
  });
});
