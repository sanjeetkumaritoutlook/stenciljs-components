import { newE2EPage } from '@stencil/core/testing';

describe('my-payment-gateway', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-payment-gateway></my-payment-gateway>');

    const element = await page.find('my-payment-gateway');
    expect(element).toHaveClass('hydrated');
  });
});
