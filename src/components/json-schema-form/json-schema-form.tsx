import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'json-schema-form',
  styleUrl: 'json-schema-form.css',
  shadow: true,
})
export class JsonSchemaForm {
  @Prop() schema: string; // JSON Schema as a string
  //@Prop() schema: Array<{ type: string; name: string; label?: string; ConditionalOn?: { fieldName: string; value: any } }> = [];
  
  @State() formData: { [key: string]: any } = {};

  handleInputChange = (e: Event, fieldName: string) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.formData = { ...this.formData, [fieldName]: target.value };
  };
  handleComboboxChange = (e: Event, fieldName: string) => {
    const target = e.target as HTMLInputElement;
    this.formData = { ...this.formData, [fieldName]: target.value };
  };

  handleRichTextEditorChange = (e: Event, fieldName: string) => {
    const target = e.target as HTMLTextAreaElement;
    this.formData = { ...this.formData, [fieldName]: target.value };
  };
  
  handleCheckboxChange = (e: Event, fieldName: string) => {
    const target = e.target as HTMLInputElement;
    this.formData = { ...this.formData, [fieldName]: target.checked };
  };

  handleArrayChange(event: Event, fieldName: string, index: number, subFieldName: string) {
    const inputValue = (event.target as HTMLInputElement).value;
    
    // Get the array from the form data
    const array = this.formData[fieldName] || [];
    
    // Ensure the array has an object at the specified index
    if (!array[index]) {
      array[index] = {};
    }
    
    // Update the specific sub-field within the array item
    array[index][subFieldName] = inputValue;
    
    // Update the form data with the modified array
    this.formData = {
      ...this.formData,
      [fieldName]: array,
    };
  };
  handleTextareaInput = (e: Event, field) => {
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    this.formData = { ...this.formData, [field.name]: value };
  
    // Validate live input
    const isValid =
      (!field.required || value.length > 0) &&
      (!field.minLength || value.length >= field.minLength) &&
      (!field.maxLength || value.length <= field.maxLength);
  
    // Optionally, you can set a `validationState` in `formData` or another property for further processing.
    if (!isValid) {
      console.log(`Validation error in field "${field.name}"`);
    }
  };
  
// validateForm() {
//   const validationErrors = {};

//   this.schema.forEach((field) => {
//     // Check if the field should be displayed
//     const shouldDisplay = this.shouldDisplayField(field);

//     // Skip validation if the field is not displayed
//     if (!shouldDisplay) return;

//     // Perform validation only for visible fields
//     if (field.required && !this.formData[field.name]) {
//       validationErrors[field.name] = `${field.label || field.name} is required.`;
//     }

//     // Add custom validations for specific field types if needed
//     if (field.type === 'email' && this.formData[field.name] && !this.isValidEmail(this.formData[field.name])) {
//       validationErrors[field.name] = `${field.label || field.name} is not a valid email.`;
//     }

//     if (field.type === 'array') {
//       const values = this.formData[field.name];
//       if (field.required && (!values || values.length === 0)) {
//         validationErrors[field.name] = `${field.label || field.name} is required.`;
//       }
//     }
//   });

//   this.validationErrors = validationErrors;
//   return Object.keys(validationErrors).length === 0; // Return true if no errors
// }

  // Check if a field should be displayed based on conditional logic
  shouldDisplayField(field: any): boolean {
    // Check if ConditionalOn property is set for the field
    if (field.conditionalOn) {
      const { field: conditionField, value } = field.conditionalOn;
      // Return true if the condition is met (field is shown)
      return this.formData[conditionField] !== value;
    }
    return true; // Field is displayed if no ConditionalOn property is provided
  }

//optional real-time cleaning of form data
  // handleChange(event: Event, fieldName: string) {
  //   const value = (event.target as HTMLInputElement).value;
  
  //   this.formData = {
  //     ...this.formData,
  //     [fieldName]: value,
  //   };
  
  //   // Clean up hidden fields
  //   this.schema.forEach((field) => {
  //     if (!this.shouldDisplayField(field)) {
  //       delete this.formData[field.name];
  //     }
  //   });
  // }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const schema = JSON.parse(this.schema);
    for (const field of schema.fields) {
    const value = this.formData[field.name] || '';
    if (
      (field.required && value.length === 0) ||
      (field.minLength && value.length < field.minLength) ||
      (field.maxLength && value.length > field.maxLength)
    ) {
      alert(`Validation failed for "${field.label}": ${field.errorMessage}`);
      return;
    }
      if (field.required && field.type === 'array' && (!this.formData[field.name] || !this.formData[field.name].length)) {
        alert(`The field "${field.label}" is required.`);
        return;
      }
    }

     // Filter the formData to exclude hidden fields
    // const filteredData = this.filterFormData();
    console.log('Form Submitted:', this.formData);
    // Add form submission logic here (e.g., API calls)
  };

  filterFormData() {
    const filteredData = {};
  
    if (Array.isArray(this.schema)) {
      this.schema.forEach((field) => {
        // Check if the field should be displayed
        if (this.shouldDisplayField(field)) {
          // If visible, add it to the filtered data
          filteredData[field.name] = this.formData[field.name];
        }
      });
    } else {
      console.error('Schema is not an array:', this.schema);
    }
  
    return filteredData;
  }
  
    // Render each field dynamically
  renderField = (field: any,index?: number, value?: any,parentFieldName?: string) => {
      // Check if the field should be displayed before rendering
      if (!this.shouldDisplayField(field)) {
        console.log(value);
        return null; // Don't render the field if it's hidden by conditional logic
  }

  // Switch case to render the appropriate field based on its type
    switch (field.type) {
      case 'text':
        return (
          <div>
            <label>{field.label}</label>
            <input
              type="text"
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              onInput={(e) =>  parentFieldName
                ? this.handleArrayChange(e, parentFieldName, index, field.name)
                : this.handleInputChange(e, field.name)}
            />
          </div>
        );
      case 'date':
        return (
          <div>
            <label>{field.label}</label>
            <input
              type="date"
              name={field.name}
              required={field.required}
              onInput={(e) =>  parentFieldName
                ? this.handleArrayChange(e, parentFieldName, index, field.name)
                :this.handleInputChange(e, field.name)}
            />
          </div>
        );
      case 'checkbox':
        return (
          <div>
            <label>
              <input
                type="checkbox"
                name={field.name}
                onChange={(e) =>  parentFieldName
                  ? this.handleArrayChange(e, parentFieldName, index, field.name)
                  :this.handleCheckboxChange(e, field.name)}
              />
              {field.label}
            </label>
          </div>
        );
      case 'radio':
        return (
          <div>
            <label>{field.label}</label>
            {field.options.map((option) => (
              <label>
                <input
                  type="radio"
                  name={field.name}
                  value={option.value}
                  onInput={(e) =>  parentFieldName
                    ? this.handleArrayChange(e, parentFieldName, index, field.name)
                    :this.handleInputChange(e, field.name)}
                />
                {option.label}
              </label>
            ))}
          </div>
        );
        case 'array': {
          const values = this.formData[field.name] || [{}];
        
          return (
            <div>
              <label>{field.label}</label>
              {values.map((value, index) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} key={index}>
                  {field.items.map((itemField) => {
                    // Pass subFieldName for array sub-fields
                    return this.renderField(itemField, index, value[itemField.name], field.name);
                  })}
                  <button
                    type="button"
                    onClick={() => {
                      const updatedValues = values.filter((_, i) => i !== index);
                      this.formData = {
                        ...this.formData,
                        [field.name]: updatedValues,
                      };
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const newItem = field.items.reduce((acc, item) => {
                    acc[item.name] = '';
                    return acc;
                  }, {});
                  this.formData = {
                    ...this.formData,
                    [field.name]: [...values, newItem],
                  };
                }}
              >
                Add {field.label}
              </button>
            </div>
          );
        }
        
        case 'select':
      // Initialize the default value in formData if not already set
      if (this.formData[field.name] === undefined) {
        this.formData = {
          ...this.formData,
          [field.name]: field.options[0].value, // Set to the first option by default
        };
      }
        return (
          <div>
            <label>{field.label}</label>
            <select
              name={field.name}
              required={field.required}
              onInput={(e) =>  parentFieldName
                ? this.handleArrayChange(e, parentFieldName, index, field.name)
                :this.handleInputChange(e, field.name)}
            >
              {field.options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        );
        case 'textarea':
          const currentValue = this.formData[field.name] || '';
          const isValid =
            (!field.required || currentValue.length > 0) &&
            (!field.minLength || currentValue.length >= field.minLength) &&
            (!field.maxLength || currentValue.length <= field.maxLength);
          return (
            <div>
          <label>{field.label}</label>
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={currentValue}
            onInput={(e) =>  parentFieldName
              ? this.handleArrayChange(e, parentFieldName, index, field.name)
              :this.handleTextareaInput(e, field)}
          ></textarea>
          <div style={{ fontSize: '14px', color: isValid ? 'green' : 'red' }}>
            {field.maxLength && `${currentValue.length}/${field.maxLength} characters`}
            {!isValid && field.errorMessage && (
              <div style={{ color: 'red' }}>{field.errorMessage}</div>
            )}
          </div>
        </div>
          );
          case 'combo-box': {
            const currentValue = this.formData[field.name] || '';
            return (
              <div>
                <label>{field.label}</label>
                <input
                  list={`${field.name}-options`}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={currentValue}
                  onInput={(e) =>  parentFieldName
                    ? this.handleArrayChange(e, parentFieldName, index, field.name)
                    :this.handleComboboxChange(e, field.name)}
                  required={field.required}
                />
                <datalist id={`${field.name}-options`}>
                  {field.options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </datalist>
              </div>
            );
          };  
        case 'my-rich-text-editor':
            return (
              <div>
                <label>{field.label}</label>
                <my-rich-text-editor
                  placeholder={field.name}
                  initial-value={this.formData[field.name]}
                  onValueChanged={(e) =>  parentFieldName
                    ? this.handleArrayChange(e, parentFieldName, index, field.name)
                    :this.handleRichTextEditorChange(e, field.name)}
                />
              </div>
            );
      default:
        return null;
    }
  };

  render() {
    const schema = JSON.parse(this.schema); // Parse the schema passed as a string
    return (
      <div>
        <h1>Dynamic form created from json schema config</h1>
      <form onSubmit={this.handleSubmit}>
        {schema.fields.map((field) => (
          <div>{this.renderField(field)}</div>
        ))}
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
