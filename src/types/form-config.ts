// interface ValidationRule {
//   type: string; // 'required', 'custom', etc.
//   message: string;
//   validatorFn?: (value: any) => boolean; // Optional custom validation function
// }

export type FormFieldConfig = {
  label: string;
  dataPath: string;
  controlName: string;
  elementType: 'text' | 'input' |'date'  |'select'|  'textarea' | 'combo-box' | 'radio' | 'radio-group' | 'array'; // Added 'radio-group'
  options?: Array<string | { label: string; value: any }>; // for combo-box, radio, radio-group, etc.
  conditionalOn?: (formData: any) => boolean;
  initialValue?: any;
  validation?: { // Directly define the validation property
    type: string; // 'required', 'custom', etc.
    message: string;
    validatorFn?: (value: any) => boolean; // Optional custom validator function
  }[]; 
  constraints?: {
    minimumEntries?: number;
    maximumEntries?: number;
  };
  formConfig?: {
    layout?: string;
    elements: FormFieldConfig[];  //array is child of main parent form, and will have same type of fields
  };
  controlConfig?: {
    add?: { label: string };
    remove?: { label: string };
  };
  [key: string]: any; // Allow additional properties like verticalLayout, verticalAlignment
};
export type CustomComponentConfig = {
  component: string;
  props: { [key: string]: any };
  content?: string;
  conditionalOn?: (formData: any) => boolean;
};

// Use a union type for your schema
export type FormConfig = FormFieldConfig | CustomComponentConfig;

