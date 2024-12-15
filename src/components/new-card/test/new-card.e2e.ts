import { newE2EPage } from '@stencil/core/testing';

describe('new-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-card></new-card>');

    const element = await page.find('new-card');
    expect(element).toHaveClass('hydrated');
  });
});
