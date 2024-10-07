import { newE2EPage } from '@stencil/core/testing';

describe('my-name', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-name></my-name>');

    const element = await page.find('my-name');
    expect(element).toHaveClass('hydrated');
  });
});
