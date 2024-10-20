import { newE2EPage } from '@stencil/core/testing';

describe('users-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<users-cards></users-cards>');

    const element = await page.find('users-cards');
    expect(element).toHaveClass('hydrated');
  });
});
