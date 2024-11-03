import { newSpecPage } from '@stencil/core/testing';
import { MyRichTextEditor } from '../my-rich-text-editor';
//https://stenciljs.com/docs/unit-testing
//To run unit tests, run stencil test --spec

describe('my-rich-text-editor', () => {
  let page, component;

  /************************************************************************************
   * Render tests
   ***********************************************************************************/

  describe('Basic Rich-Text-Editor Rendering', () => {
    async function componentSetup(props) {
      for (const prop in props) {
        component[prop] = props[prop];
      }
      page.root.appendChild(component);
      await page.waitForChanges();
      expect(page.root.shadowRoot).toBeTruthy();
      const el = page.root.shadowRoot.querySelector('.my-rich-text-editor');
      expect(el).toBeTruthy();
      return el;
    }

    beforeEach(async () => {
      page = await newSpecPage({
        components: [MyRichTextEditor],
        html: '<div></div>',
      });
      component = page.doc.createElement('my-rich-text-editor');
    });

    // ================================================================ //
    // -- Shadow DOM & Theme

    describe('Shadow DOM & Theme', () => {
      it('should render a Rich-Text-Editor with shadow DOM', async () => {
       // await componentSetup();
      });

      it('should render a Rich-Text-Editor with corporate theme by default', async () => {
        // const el = await componentSetup();
        // expect(el).toHaveClass(`theme-${FluidTheme.CORP}`);
      });

    
    });
  });

  /************************************************************************************
   * Functional tests
   ***********************************************************************************/

  describe('Functional Tests', () => {
    // let component: CustomRtf;
    //
    // beforeEach(() => {
    //   component = new CustomRtf();
    // });
  });
});

