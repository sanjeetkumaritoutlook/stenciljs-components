import { newE2EPage } from '@stencil/core/testing';

describe('test-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-counter></test-counter>');

    const element = await page.find('test-counter');
    expect(element).toHaveClass('hydrated');
  });
});
