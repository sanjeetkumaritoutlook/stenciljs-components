import { newSpecPage } from '@stencil/core/testing';
import { MyPieChart } from '../my-pie-chart';

describe('my-pie-chart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyPieChart],
      html: `<my-pie-chart></my-pie-chart>`,
    });
    expect(page.root).toEqualHtml(`
      <my-pie-chart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-pie-chart>
    `);
  });
});
