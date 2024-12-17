import { Component,Prop,State, h } from '@stencil/core';
import { FormConfig} from '../../types/form-config';
import { formSchema } from './config/config';
//import { SelectHTMLAttributes } from '@stencil/core';
// interface CustomSelectAttributes  extends JSX.IntrinsicElements['select']{
//   value?: string | undefined; // Explicitly define `value` as a string
// }
@Component({
  tag: 'dynamic-form-generator',
  styleUrl: 'dynamic-form-generator.css',
  shadow: true,
})
export class DynamicFormGenerator {
   /** External form schema */
   @Prop() schema: FormConfig[] = formSchema;
/** Form Data State */
@State() formData: { [key: string]: any } = {};
@State() filteredOptions: Array<{ label: string, value: string }> = [];
@State() showDropdown: boolean = false;

 /** Handle Input Change */
 handleInputChange(event: Event, dataPath: string) {
  const target = event.target as HTMLInputElement  | HTMLSelectElement;
  const value = target.value;
  this.formData = { ...this.formData, [dataPath]: value };
}

handleInputFieldChange(event: Event, dataPath: string) {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  this.formData = { ...this.formData, [dataPath]: value };
}
handleInputBlur(event: Event, dataPath: string, maskingFn: (value: string) => string, blurDelay: number) {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  // Apply the masking function after a delay (using setTimeout)
  setTimeout(() => {
    const maskedValue = maskingFn(value);
    this.formData = { ...this.formData, [dataPath]: maskedValue };
  }, blurDelay);
}

// Handle adding a new entry for 'array' element type
handleAddArrayEntry(dataPath: string, formConfig: any) {
  const newEntry = formConfig.elements.reduce((entry: any, element: any) => {
    entry[element.dataPath] = '';
    return entry;
  }, {});
  this.formData = { ...this.formData, [dataPath]: [...(this.formData[dataPath] || []), newEntry] };
}

// Handle removing an entry from the array
handleRemoveArrayEntry(dataPath: string, index: number) {
  const updatedArray = [...(this.formData[dataPath] || [])];
  updatedArray.splice(index, 1);
  this.formData = { ...this.formData, [dataPath]: updatedArray };
}
// Render function for ComboBox
// it behaves as a hybrid input — allowing both dropdown selections and custom text input.
renderComboBox(config) {
  const { label, dataPath,controlName, options, initialValue, placeholder, allowCustomInput, helpText, conditionalOn } = config;
  const formData = this.formData || {};  // Ensure formData exists
  
  // Evaluate conditional visibility
  if (conditionalOn && !conditionalOn(formData)) {
    return null;  // Don't render if the condition is not met
  }
  const selectedValue = formData[dataPath] || initialValue || '';

  // The value of the field (either the initialValue or user input)
   // Handle input change
   const handleInputChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;  // Type-cast to HTMLInputElement
    this.handleInputChange(event, dataPath); // Update formData
    this.showDropdown = true;
    // Filter options based on user input
    this.filteredOptions = options.filter(option => option.label.toLowerCase().includes(value.toLowerCase()));
  };


  // Handle selection from dropdown
  // const handleSelectOption = (value: string) => {
  //   // We create a custom object to simulate the event structure
  //   this.handleInputChange({ target: { value } } as unknown as Event, dataPath); // Update formData
  //   this.showDropdown = false;  // Close dropdown
  // };

  return (
    <div>
      {label && <label htmlFor={dataPath}>{label}</label>}
      
      <div class="combo-box-container">
      {allowCustomInput ? (
        <input
          type="text"
          value={selectedValue}
          placeholder={placeholder}
          onInput={handleInputChange}
          onBlur={() => this.showDropdown = false} // Close dropdown on blur
          onFocus={() => this.showDropdown = true} // Open dropdown on focus
          id={dataPath}
          aria-required="true"
        />
      ) : (
      
        <select
        id={controlName}
        name={controlName}
        onInput={handleInputChange}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )}

      {/* Help text (optional) */}
      {helpText && <small>{helpText}</small>}
    </div>
    </div>
  );
}


renderArray(config) {
  const { label, dataPath, controlConfig, formConfig, conditionalOn } = config;

  // Conditionally render the field based on the `conditionalOn` function
  if (conditionalOn && !conditionalOn(this.formData)) {
    return null; // Don't render the field if the condition is not met
  }

  const arrayItems = this.formData[dataPath] || [];

  return (
    <div class="array-group">
      <label>{label}</label>
      {arrayItems.map((item, index) => (
        <div class="array-entry" key={index}>
          {formConfig.elements.map((elementConfig) => {
            return this.renderComponent({
              ...elementConfig,
              dataPath: `${dataPath}[${index}].${elementConfig.dataPath}`,
              initialValue: item[elementConfig.dataPath],
            });
          })}
          <button type="button" onClick={() => this.handleRemoveArrayEntry(dataPath, index)}>
            {controlConfig.remove.label}
          </button>
        </div>
      ))}
      {arrayItems.length < config.constraints.maximumEntries && (
        <button type="button" onClick={() => this.handleAddArrayEntry(dataPath, formConfig)}>
          {controlConfig.add.label}
        </button>
      )}
    </div>
  );
}

renderInput(config) {
  const { label, controlName, dataPath, initialValue, maskingConfig } = config;

  const value = this.formData[dataPath] || initialValue || '';

  return (
    <div class="input-group">
      <label>{label}</label>
      <input
        type="text"
        name={controlName}
        value={value}
        onInput={(event: Event) => this.handleInputFieldChange(event, dataPath)}
        onBlur={(event: Event) =>
          maskingConfig ? this.handleInputBlur(event, dataPath, maskingConfig.maskingFn, maskingConfig.blurDelay) : null
        }
      />
    </div>
  );
}
renderRadioGroup(config) {
  const { label, controlName, options, dataPath, initialValue, conditionalOn } = config;

  // Conditionally render the field based on the `conditionalOn` function
  if (conditionalOn && !conditionalOn(this.formData)) {
    return null; // Don't render the field if the condition is not met
  }

  // Safely use form data or default initialValue
  const selectedValue = this.formData[dataPath] || initialValue || '';

  return (
    <div class="radio-group">
      <label>{label}</label>
      {options.map((option) => (
        <label class="radio-inline" key={option.value}>
          <input
            type="radio"
            name={controlName}
            value={option.value}
            checked={selectedValue === option.value}
            onInput={(event: Event) => this.handleInputChange(event, dataPath)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

renderSelect(config) {
  const { label, controlName, options, dataPath, placeholder, initialValue, conditionalOn } = config;
  const formData = this.formData || {};  // Ensure formData exists
  if (conditionalOn) {
    console.log('Evaluating conditionalOn:', conditionalOn(formData),controlName,placeholder);  // Debug log
  }
  // Conditionally render the field based on the `conditionalOn` function
  if (conditionalOn && !conditionalOn(formData)) {
    return null; // Don't render the field if the condition is not met
  }
 // Safely cast value to string, as required by SelectHTMLAttributes
 //const value = this.formData[dataPath] || initialValue || '';
console.log(initialValue);
  return (
    <div>
      {label && <label htmlFor={dataPath}>{label}</label>}
      <select
        name={dataPath}
     //   value={formData[dataPath] || initialValue || ''}
        onInput={(event: Event) => this.handleInputChange(event, dataPath)}
        id={dataPath}
      >
        <option value="">{config.placeholder}</option>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    
    </div>
  );
}

renderDate(config) {
  const { label, dataPath, validation, initialValue } = config;
  const formData = this.formData || {}; // Safe access to formData
  const value = formData[dataPath] || initialValue || '';
  return (
    <div>
      {label && <label htmlFor={dataPath}>{label}</label>}
      <input
        type="date"
        name={dataPath}
        value={value}
        onInput={(event: Event) => this.handleInputChange(event, dataPath)}
        id={dataPath}
        aria-required={validation && validation.some(v => v.type === 'required') ? 'true' : 'false'}
      />
      {validation && validation.some(v => v.type === 'required') && (
        <span class="error">{validation[0]?.message}</span>
      )}
    </div>
  );
}

// Handle form submission
handleSubmit(event: Event) {
  event.preventDefault();
  
  // Optional: You can add validation logic here if needed
  // const isValid = this.validateForm();
  // if (!isValid) {
  //   console.log('Form validation failed.');
  //   return;
  // }

   // Retrieve the form data
 const formData = this.getFormData();

   // Clean the form data by merging array fields with the parent data
 const cleanedFormData = this.cleanArrayFields(formData);

 // Now, submit the cleaned data
 console.log('Cleaned form data:', cleanedFormData);

  // You can also send the data to an API or another handler
}

getFormData() {
  // Retrieve the form data (assuming you already have it in a proper object structure)
  return this.formData;
}

cleanArrayFields(formData: any) {
  // Create an object to store the cleaned form data
  const cleanedData: any = { ...formData };

  // Iterate through all keys in the form data to handle array fields
  Object.keys(formData).forEach(key => {
    const match = key.match(/(.*)\[(\d+)]\.(.*)/); // Match array fields (e.g., manuscript_details[0].manuscript_title)

    if (match) {
      const arrayName = match[1]; // e.g., manuscript_details
      const index = match[2]; // e.g., 0, 1, 2, ...
      const fieldName = match[3]; // e.g., manuscript_title

      // If the array field is found, handle it
      if (!cleanedData[arrayName]) {
        cleanedData[arrayName] = [];
      }

      // If the index is not already present in the array, initialize it
      if (!cleanedData[arrayName][index]) {
        cleanedData[arrayName][index] = {};
      }

      // Merge the value into the corresponding array index
      cleanedData[arrayName][index][fieldName] = formData[key];

      // Remove the individual field key (since it's now part of the array)
      delete cleanedData[key];
    }
  });

  // After processing, return the cleaned data
  return cleanedData;
}
// Optional: Validation function for the form (you can add more rules)
validateForm() {
  // Implement any required validation logic here
  // For example, checking if required fields are filled
  // for (const field of this.schema) {
  //   if (field.validation) {
  //     for (const rule of field.validation) {
  //       if (rule.type === 'required' && !this.formData[field.dataPath]) {
  //         console.log(rule.message);
  //         return false;
  //       }
  //     }
  //   }
  // }
  // return true;
}

 /** Render Form Field */
 renderComponent(config) {
  const { elementType, component, props, content } = config;
  switch (elementType) {
    case 'input':
      return this.renderInput(config);
    case 'radio-group':
      return this.renderRadioGroup(config);
    case 'select':
      return this.renderSelect(config);
    case 'array':
      return this.renderArray(config);
    case 'date':
      return this.renderDate(config);
     case 'combo-box':
        return this.renderComboBox(config);
    default:
      return h(component, props, content);
  }

}


  render() {
    return (
      <div>
       <h1>Dynamic form generator from schema that accepts even functions</h1>
      <form onSubmit={(event: Event) => this.handleSubmit(event)}>
      {this.schema.map((field) => this.renderComponent(field))}
           {/* Submit Button */}
        <button type="submit">Submit</button>
      <pre>{JSON.stringify(this.formData, null, 2)}</pre>
    </form>
    </div>
    );
  }
}
