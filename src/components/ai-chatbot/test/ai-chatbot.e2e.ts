import { newE2EPage } from '@stencil/core/testing';

describe('ai-chatbot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ai-chatbot></ai-chatbot>');

    const element = await page.find('ai-chatbot');
    expect(element).toHaveClass('hydrated');
  });
});
