import { newE2EPage } from '@stencil/core/testing';

describe('nice-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nice-alert></nice-alert>');

    const element = await page.find('nice-alert');
    expect(element).toHaveClass('hydrated');
  });
});
