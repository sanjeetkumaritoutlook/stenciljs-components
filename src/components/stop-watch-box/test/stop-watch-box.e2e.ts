import { newE2EPage } from '@stencil/core/testing';

describe('stop-watch-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stop-watch-box></stop-watch-box>');

    const element = await page.find('stop-watch-box');
    expect(element).toHaveClass('hydrated');
  });
});
