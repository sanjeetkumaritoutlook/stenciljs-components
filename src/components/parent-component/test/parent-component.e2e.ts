import { newE2EPage } from '@stencil/core/testing';

describe('parent-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<parent-component></parent-component>');

    const element = await page.find('parent-component');
    expect(element).toHaveClass('hydrated');
  });
});
