import { newE2EPage } from '@stencil/core/testing';

describe('my-pie-chart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-pie-chart></my-pie-chart>');

    const element = await page.find('my-pie-chart');
    expect(element).toHaveClass('hydrated');
  });
});
