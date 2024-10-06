import { newE2EPage } from '@stencil/core/testing';

describe('search-world', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<search-world></search-world>');

    const element = await page.find('search-world');
    expect(element).toHaveClass('hydrated');
  });
});
