import { newE2EPage } from '@stencil/core/testing';

describe('test-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-button></test-button>');

    const element = await page.find('test-button');
    expect(element).toHaveClass('hydrated');
  });
});
