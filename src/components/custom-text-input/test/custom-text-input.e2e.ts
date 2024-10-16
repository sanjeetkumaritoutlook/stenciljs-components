import { newE2EPage } from '@stencil/core/testing';

describe('custom-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-text-input></custom-text-input>');

    const element = await page.find('custom-text-input');
    expect(element).toHaveClass('hydrated');
  });
});
