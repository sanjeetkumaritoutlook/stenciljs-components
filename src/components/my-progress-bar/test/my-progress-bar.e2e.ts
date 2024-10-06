import { newE2EPage } from '@stencil/core/testing';

describe('my-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-progress-bar></my-progress-bar>');

    const element = await page.find('my-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
