import { newSpecPage } from '@stencil/core/testing';
import { AiChatbot } from '../ai-chatbot';

describe('ai-chatbot', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AiChatbot],
      html: `<ai-chatbot></ai-chatbot>`,
    });
    expect(page.root).toEqualHtml(`
      <ai-chatbot>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ai-chatbot>
    `);
  });
});
