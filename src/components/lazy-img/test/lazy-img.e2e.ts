import { newE2EPage } from '@stencil/core/testing';

describe('lazy-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lazy-img></lazy-img>');

    const element = await page.find('lazy-img');
    expect(element).toHaveClass('hydrated');
  });
});
