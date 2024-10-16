import { newE2EPage } from '@stencil/core/testing';

describe('complex-ionic-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<complex-ionic-form></complex-ionic-form>');

    const element = await page.find('complex-ionic-form');
    expect(element).toHaveClass('hydrated');
  });
});
