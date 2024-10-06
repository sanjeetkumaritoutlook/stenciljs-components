import { newE2EPage } from '@stencil/core/testing';

describe('my-progress-ring', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-progress-ring></my-progress-ring>');

    const element = await page.find('my-progress-ring');
    expect(element).toHaveClass('hydrated');
  });
  it("should render textContent", async () => {
    const page = await newE2EPage();
    await page.setContent('<my-progress-ring percentage="30"></my-progress-ring>');
    const element = await page.find("progress-ring >>> .percentageText");
    expect(element.textContent).toEqualText("%");
  });
});
