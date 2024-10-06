import { newSpecPage } from '@stencil/core/testing';
import { MyPaymentGateway } from '../my-payment-gateway';

describe('my-payment-gateway', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPaymentGateway],
      html: `<my-payment-gateway></my-payment-gateway>`,
    });
    expect(page.root).toEqualHtml(`
      <my-payment-gateway>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-payment-gateway>
    `);
  });
});
