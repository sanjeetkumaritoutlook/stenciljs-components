import { newE2EPage } from '@stencil/core/testing';

describe('expandable-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<expandable-card></expandable-card>');

    const element = await page.find('expandable-card');
    expect(element).toHaveClass('hydrated');
  });
});
