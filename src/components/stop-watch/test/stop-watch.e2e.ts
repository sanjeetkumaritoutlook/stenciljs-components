import { newE2EPage } from '@stencil/core/testing';

describe('stop-watch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stop-watch></stop-watch>');

    const element = await page.find('stop-watch');
    expect(element).toHaveClass('hydrated');
  });
});
