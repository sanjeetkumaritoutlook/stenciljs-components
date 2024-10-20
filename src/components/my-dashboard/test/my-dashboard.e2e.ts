import { newE2EPage } from '@stencil/core/testing';

describe('my-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-dashboard></my-dashboard>');

    const element = await page.find('my-dashboard');
    expect(element).toHaveClass('hydrated');
  });
});
