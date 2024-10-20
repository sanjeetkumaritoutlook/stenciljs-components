import { newSpecPage } from '@stencil/core/testing';
import { MyDashboard } from '../my-dashboard';

describe('my-dashboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyDashboard],
      html: `<my-dashboard></my-dashboard>`,
    });
    expect(page.root).toEqualHtml(`
      <my-dashboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-dashboard>
    `);
  });
});
