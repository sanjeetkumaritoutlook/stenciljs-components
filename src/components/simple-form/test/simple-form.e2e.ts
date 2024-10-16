import { newE2EPage } from '@stencil/core/testing';

describe('simple-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-form></simple-form>');

    const element = await page.find('simple-form');
    expect(element).toHaveClass('hydrated');
  });
});
