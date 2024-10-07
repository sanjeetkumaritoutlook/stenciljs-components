import { newE2EPage } from '@stencil/core/testing';

describe('slider-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<slider-component></slider-component>');

    const element = await page.find('slider-component');
    expect(element).toHaveClass('hydrated');
  });
});
