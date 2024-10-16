import { newE2EPage } from '@stencil/core/testing';

describe('combo-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<combo-box></combo-box>');

    const element = await page.find('combo-box');
    expect(element).toHaveClass('hydrated');
  });
});
