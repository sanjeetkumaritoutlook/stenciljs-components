const mockEditor = {
  getContainer: jest.fn(() => document.createElement('div')),
  remove: jest.fn(),
  on: jest.fn(),
};

const tinymce = {
  init: jest.fn().mockImplementation((options) => {
    options.setup && options.setup(mockEditor);
    return Promise.resolve(mockEditor);
  }),
  remove: jest.fn(),
  activeEditor: {
    setContent: jest.fn(),
    getContent: jest.fn(() => '<p>Mocked content</p>'),
    save: jest.fn(),
    remove: jest.fn(),
    getContainer: jest.fn(() => document.createElement('div')),
  },
  models: {
    dom: {
      model: jest.fn(),
    },
  },
  icons: {
    default: jest.fn(),
  },
  themes: {
    silver: jest.fn(),
  },
  plugins: {
    advlist: jest.fn(),
    lists: jest.fn(),
    link: jest.fn(),
    image: jest.fn(),
    media: jest.fn(),
    table: jest.fn(),
    code: jest.fn(),
  },
  util: {
    URI: jest.fn(),
  },
};

module.exports = tinymce;
