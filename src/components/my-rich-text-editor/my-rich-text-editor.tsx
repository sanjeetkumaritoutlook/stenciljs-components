import { Component, h, Listen,Prop, Event, EventEmitter ,Watch,Element} from '@stencil/core';
import tinymce from 'tinymce/tinymce';    //simply import 'tinymce' doesnt work
import 'tinymce/models/dom/model';

//https://stackoverflow.com/questions/68951483/tinymce-err-aborted-404-not-found-skins-vue
/* Default icons are required for TinyMCE 5.3 or above */
 import 'tinymce/icons/default';

 /* A theme is also required */
 import 'tinymce/themes/silver';
 /* Import the skin */
 import 'tinymce/skins/ui/oxide/skin.css';
//https://www.tiny.cloud/blog/fixing-plugin-errors/
 /* Import plugins */
 import 'tinymce/plugins/advlist';
 import 'tinymce/plugins/code';
 import 'tinymce/plugins/emoticons';
 import 'tinymce/plugins/emoticons/js/emojis';
 import 'tinymce/plugins/link';
 import 'tinymce/plugins/lists';
 import 'tinymce/plugins/table';
 import 'tinymce/plugins/wordcount';
 import 'tinymce/plugins/autolink';
 import 'tinymce/plugins/autosave';
 import 'tinymce/plugins/save';
 import 'tinymce/plugins/image';
 import 'tinymce/plugins/insertdatetime';
 import 'tinymce/plugins/visualblocks';
 import 'tinymce/plugins/searchreplace';
 import 'tinymce/plugins/media';
 import 'tinymce/plugins/quickbars';
 import 'tinymce/plugins/preview';
 import 'tinymce/plugins/pagebreak';
 import 'tinymce/plugins/anchor';
 import 'tinymce/plugins/nonbreaking';
 import 'tinymce/plugins/accordion';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/visualchars';

//Comparision: https://www.tiny.cloud/tinymce-vs-quill/
//https://www.tiny.cloud/froala-vs-tinymce/
//https://froala.com/blog/editor/compare-froala-tinymce-the-best-wysiwyg-editor/

@Component({
  tag: 'my-rich-text-editor',
  styleUrl: 'my-rich-text-editor.css',
  shadow: true,
})
export class MyRichTextEditor {
  private editor: any; // Store a reference to the TinyMCE editor instance
 /**
   * Reference to the "root" TinyMCE container element that contains
   * the Editor's menubar, toolbar, & <iframe>.
   */
 //private _containerRef: HTMLElement;

 /**
  * Reference to the element used to initialize the TinyMCE Editor
  * (i.e. element passed to the "target" property in the init() method).
  */
 private _targetRef: HTMLElement;
 
  @Prop({ mutable: true, reflect: true }) initialValue: string;
  //to control whether the tinymce editor is editable
  @Prop() disabled: boolean = false; 
  @Prop() disableQuickbars: boolean = false;
/**
   * Optional placeholder text displayed when the form field is empty.
   */
  @Prop({ mutable: true }) placeholder: string;
  @Prop() fontFamily: string = 'Calibri'; // Default font family doesnt work when initialvalue has font
  @Prop() fontSize: string; // Default font size prop
  @Element() el: HTMLElement;

  @Event() valueChange: EventEmitter<string>;
  @Event() editorFocus: EventEmitter<void>;
  @Event() editorBlur: EventEmitter<void>;
  @Event() contentChanged: EventEmitter<any>;
  @Prop() value: string = ''; // The value from the parent  json-schema-form
  @Prop() name: string = '';

  // Define an event emitter to notify the parent (json-schema-form) of changes
  @Event() valueChanged: EventEmitter;

  // This is called when the user types into the rich text editor
  handleInput = (e: Event) => {
    //const target = this._targetRef as HTMLElement;
    const newValue = this.editor.getContent(); // Capture the content of the editor
    console.log('Event details:', e); // Example: logging the event
    this.valueChanged.emit({ name: this.name, value: newValue }); // Emit the updated value
};
  constructor() {
    
  }
  @Watch('value')
  onValueChange(newValue: string) {
    if (this.editor && this.editor.getContent() !== newValue) {
      this.editor.setContent(newValue);
    }
  }
  @Watch('fontFamily')
  watchFontFamily(newValue: string) {
    if (this.editor) {
      this.editor.execCommand('FontName', false, newValue);
    }
  }
    // Watch for changes to fontSize
 @Watch('fontSize')
 watchFontSizeHandler(newValue: string) {
   if (this.editor) {
     this.editor.execCommand('fontSize', false, newValue);
   }
 }
   //initialize TinyMCE properly within your component. lifecycle method
   componentDidLoad() {
    this.initTinyMCE();
   }

   initTinyMCE() {
     // Check if editor is already initialized
     if (!this.editor) {
    //   const textarea : any = this.el
    // .shadowRoot.querySelector('div > #my-tinymce-component');
      //const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
     // const isSmallScreen = window.matchMedia('(max-width: 1023.5px)').matches;
     
      tinymce.init({
        //Create a configuration object for TinyMCE. Customize it according to your needs:
       // selector: 'textarea',
       target: this._targetRef,  // HTML element convert into a TinyMCE editor.
        placeholder: this.placeholder,
         // Other configurations...
         //https://www.tiny.cloud/docs/configure/integration-and-setup/
         //https://www.tiny.cloud/docs/configure/editor-appearance/#skin_url
         //https://www.tiny.cloud/docs/tinymce/latest/basic-setup/ 
        promotion: false, //hides the Upgrade promotion button
        license_key: 'gpl',
        highlight_on_focus: false,
        browser_spellcheck: true,
        //HTML custom font options
      font_size_formats: '2pt 4pt 6pt 8pt 9pt 10pt 11pt 12pt 14pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 48pt 60pt 72pt 96pt', 
      width:'100%',
       height: 350,
      //  resize:'both', //https://www.tiny.cloud/docs/tinymce/latest/editor-size-options/
       theme: 'silver',        // Choose a theme ('modern', 'silver', 'inlite','mobile' etc.)
       //https://www.tiny.cloud/docs/tinymce/latest/editor-skin/
       //skin: 'oxide',
       skin: false,
         //last backslash should not be given in url as it doesnt work in testing
      //and also to make placeholder work in angular and react
     skin_url: 'https://cdn.jsdelivr.net/npm/tinymce@7.4.1/skins/ui/oxide',
        plugins: ["accordion", "autoresize", "charmap", "code", "directionality", "importcss","help", "fullscreen", "codesample", "table",  "link","advlist", "lists","wordcount","autolink","autosave","save","image","insertdatetime","visualblocks","visualchars","searchreplace","media","quickbars","emoticons","preview","pagebreak","anchor","nonbreaking"],
       // block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3',
        branding: false,
         menubar: 'file edit view insert format tools table tc help',
         toolbar: "undo redo | formatselect  | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | alignleft aligncenter alignright alignjustify | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
       
         //paste Core plugin options
        paste_block_drop: false,
        paste_data_images: true,
        paste_as_text: false, // Keep this false to retain formatting
        valid_elements: '*[*]', // Allow all elements and attributes   
        allow_html_in_named_anchor: true,
        emoticons_append: {
          custom_mind_explode: {
            keywords: [ 'brain', 'mind', 'explode', 'blown' ],
            char: '🤯',
            category: 'Genius'
          },
          robot: {
            keywords: [ 'computer', 'machine', 'bot' ],
            char: '🤖',
            category: 'AI'
          },
          dog: {
            keywords: [ 'animal', 'friend', 'nature', 'woof', 'puppy', 'pet', 'faithful' ],
            char: '🐶',
            category: 'Nature'
          }
        },
      
      // powerpaste_word_import: 'merge',
        // mceInsertClipboardContent: true,
       // noneditable_noneditable_class: 'mceNonEditable',
       importcss_append: true,
      toolbar_mode: 'sliding',
       image_title: true,
        help_accessibility: false,
        image_advtab: true,
        min_height: 350,
        max_height: 400,
       quickbars_insert_toolbar: this.disableQuickbars
       ? false // Disable the quickbars insert toolbar if the prop is true
       : 'quicktable image media codesample',
       quickbars_selection_toolbar: this.disableQuickbars
       ? false // Disable the quickbars selection toolbar if the prop is true
       : 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        // spellchecker_active: true,
        // spellchecker_language: 'en_US',
        // spellchecker_languages: 'English (United States)=en_US,English (United Kingdom)=en_GB,Danish=da,French=fr,German=de,Italian=it,Polish=pl,Spanish=es,Swedish=sv',
        //directly referencing paths within node_modules is not always recommended.
        //CSS hacks
        //https://www.tiny.cloud/blog/css-hacks/
        //https://github.com/tinymce/tinymce/issues/4886
        //TinyMCE comes with 17 font options by default.
        //https://www.tiny.cloud/blog/tinymce-custom-font-family/
        //https://www.tiny.cloud/docs/tinymce/latest/user-formatting-options/#font_formats
        //https://www.tiny.cloud/blog/tinymce-google-fonts/
        //https://fonts.google.com/specimen/EB+Garamond
        //https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/
        font_family_formats: `Calibri=Calibri, sans-serif;
        Andale Mono=andale mono,times;
        Arial=arial,helvetica,sans-serif; 
        Arial Black=arial black,avant garde;
        Noto Serif Devanagari=Noto Serif Devanagari", serif;
        Book Antiqua=book antiqua,palatino; 
        Comic Sans MS=comic sans ms,sans-serif; 
        Courier New=courier new,courier,monospace;
        Lato Black=lato; 
        Roboto=Roboto, sans-serif;
        Bungee=Bungee;
        Open Sans='Open Sans', sans-serif;
        Lora=Lora, serif;
        Montserrat=Montserrat, sans-serif;
        Garamond=Garamond, serif;
        EB Garamond='EB Garamond', serif;
        Poppins=Poppins;
        Georgia=georgia,palatino; 
        Helvetica=helvetica;
        Impact=impact,chicago; 
        Oswald=Oswald, sans-serif;
        Symbol=symbol;
        Tahoma=tahoma,arial,helvetica,sans-serif; 
        Terminal=terminal,monaco;
        Times New Roman=times new roman,times; 
        Trebuchet MS=trebuchet ms,geneva; 
        Verdana=verdana,geneva; 
        Webdings=webdings; 
        Josefin='Josefin Sans', sans-serif; 
        Wingdings=wingdings,zapf dingbats`,
        content_css: 'https://cdn.jsdelivr.net/npm/tinymce@7.4.1/skins/ui/oxide/content.min.css',
        //  content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
        //https://www.tiny.cloud/blog/tinymce-css-and-custom-styles/
       content_style: `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Garamond&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');
       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
       @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@100..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
      }
      `,
      
       //Set the default font: https://www.tiny.cloud/blog/tinymce-custom-font-family/
         //content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        //https://www.tiny.cloud/docs/tinymce/latest/tinymce-for-mobile/
        mobile: {
          theme: 'silver',
          width:'100%',
          height: 350,
          menubar: true,
          plugins: ['autosave', 'lists', 'autolink','table', 'link', 'advlist', 'code'],
          toolbar: 'undo bold italic styleselect fontfamily fontsize',
        },
        //setup callback assigns the editor 
        setup: (editor) => {
          this.editor = editor; // Store the editor instance
          editor.on('init', () => {
            //https://www.tiny.cloud/docs/tinymce/latest/editor-command-identifiers/
            editor.execCommand('FontName', false, this.fontFamily);
            //https://www.tiny.cloud/blog/tinymce-exec-commands/
          //https://stackoverflow.com/questions/5868295/document-execcommand-fontsize-in-pixels
          editor.execCommand('fontSize', false, this.fontSize);
          });
          editor.on('change keyup', () => {
            const content = editor.getContent();
            this.valueChange.emit(content);
          });
  
          editor.on('keyup', () => {
            console.log('Editor was clicked');
        });
         // Add an event listener for the input event
         editor.on('input', () => {
          this.handleEditorInput();
        });
        editor.on('change', () => {
          console.log('Editor on change');
          this.contentChanged.emit(editor.getContent());
        });
  
        editor.on('focus', () => {
          this.editorFocus.emit();
        });
  
        editor.on('blur', () => {
          this.editorBlur.emit();
           tinymce.triggerSave();
          console.log('Trigger save working');
        });
        //https://www.tiny.cloud/docs/tinymce/latest/apis/tinymce.editormode/#set
        //https://stackoverflow.com/questions/13881812/make-readonly-disable-tinymce-textarea
        if (this.disabled) {
          editor.mode.set('readonly');
        }
        },
      });
    
    
    }
   }
 
     // Custom logic to handle input events
     handleEditorInput() {
       // Access the content of the editor
       const editorContent = this.editor.getContent();
       // Implement your custom logic here
       console.log('Editor content on input changed:', editorContent);
     }
   @Listen('input', { target: 'document' })
  
   
   
   //Before performing any operations- GET or SET- ensure that the this.editor instance is available
   getContentFromEditor() {
     if (this.editor) {
       // Access properties or methods of the TinyMCE editor instance
       const content = this.editor.getContent();
       console.log('Content from TinyMCE editor:', content);
       return content;
     } else {
       console.error('TinyMCE editor instance not available.');
       return null;
     }
   }
 
   setContentInEditor(newContent: string) {
     if (this.editor) {
       this.editor.setContent(newContent);
       console.log('Content set in TinyMCE editor:', newContent);
     } else {
       console.error('TinyMCE editor instance not available.');
     }
   }
   handleEvent() {
     this.contentChanged.emit({ detail: 'some data' });
   }
   //componentDidUnload() deprecated
   disconnectedCallback() {
     const el : any =  this.el
   .shadowRoot.querySelector('div > #my-tinymce-component');
     tinymce.remove(el);
     this.editor = null; // Clear the reference during component unload
   }
  
  render() {
    let editorId = `editor-${Math.floor(Math.random() * 1000)}`;
    return (
      <div>
       {/* <button onClick={() => this.handleEvent()}>Click me</button> */}
       <h1>RTF editor</h1>
       <div 
       id={editorId}
       ref={(el: HTMLElement) => (this._targetRef = el)}
        innerHTML={this.value || this.initialValue}
        aria-disabled={this.disabled}
        aria-placeholder={this.placeholder}
        onInput={(e) => this.handleInput(e)}></div>
       <button onClick={() => this.getContentFromEditor()}>Get Content/Save </button>
       <button onClick={() => this.setContentInEditor('')}>Clear Content</button>
     </div>
   );
  }
}
