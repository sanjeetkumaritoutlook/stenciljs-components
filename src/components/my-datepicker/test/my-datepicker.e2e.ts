import { newE2EPage } from '@stencil/core/testing';

describe('my-datepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-datepicker></my-datepicker>');

    const element = await page.find('my-datepicker');
    expect(element).toHaveClass('hydrated');
  });
});
