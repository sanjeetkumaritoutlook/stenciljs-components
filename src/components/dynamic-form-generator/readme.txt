3. How It Works
Accepts an external schema with field configurations (config.ts).
Dynamically renders fields based on elementType.
Supports conditional rendering through the conditionalOn function.
Updates form data in real time and displays it as JSON for debugging.

4. Usage
Include the component in your HTML or StencilJS project:

<dynamic-form-generator></dynamic-form-generator>
If you want to pass a custom schema:

<dynamic-form-generator schema={customSchema}></dynamic-form-generator>
----
. When option is an object, React (or in this case, JSX) doesn’t know how to handle it directly.

To fix this, you'll need to:

Check whether the option is a string or an object.
For objects, use the value property for the option's value attribute, and the label property for the display text.
---
Explanation
Check typeof option === 'string': If option is a string, it is directly used for both the value and the label of the <option> tag.
Handle objects: If option is an object (e.g., { label: string; value: any }), its value is used as the value attribute, and its label is displayed as the option's text.
Why This Works
This approach ensures compatibility with both string options and object options while adhering to the expected types for the value attribute of an HTML <option> element.
--
Now your schema can include both FormFieldConfig and custom component configurations:

import { FormConfig } from './types/form-config';

export const formSchema: FormConfig[] = [
  {
    label: 'Name',
    dataPath: 'name',
    controlName: 'name',
    elementType: 'text',
  },
  {
    component: 'fluid-section-detail',
    props: {
      titleLevel: 3,
      sectionTitle: 'Commercial / Financial Institutions',
    },
    content: `Please indicate if this is a Commercial or FI policy`,
  },
];
---
Explanation
Union Type:
By combining FormFieldConfig and CustomComponentConfig into a union type (FormConfig), the schema can handle both standard form fields and custom components.
Conditional Rendering:
Both types can optionally include conditionalOn for dynamic visibility.
Component Check:
In the renderField function, if ('component' in field) is used to distinguish between custom components and standard form fields.



----
 StencilJS because it treats HTMLSelectElement attributes slightly differently than React's type system.
 This issue arises because StencilJS uses a stricter type checking system for its components, and it doesn't expect certain attributes to be passed directly to the native HTML elements without proper typing.
 ---
 value Handling: The value of the <select> dropdown is bound to this.formData[dataPath], which holds the selected value. If no value is selected, it will fallback to the initialValue (if provided) or an empty string (''):
 value={this.formData[dataPath] || initialValue || ''}

using the JSX.IntrinsicElements type, which Stencil uses to define types for all native HTML elements, including <select>. You can extend this type to create custom attributes for the <select> element.

Updated Solution Using JSX.IntrinsicElements:
Extend JSX.IntrinsicElements['select']: You can extend this type to include the value attribute.

Use it in your component: The custom type will ensure that StencilJS accepts the value attribute and works with select.
-------
inline radio
Explanation:
Radio Group (radio-group): The parent div is styled with display: flex and flex-direction: column, which allows each radio button with its label to stack vertically, but it doesn’t affect the inline positioning of the individual radio buttons and their labels.

Radio Inline (radio-inline): Each radio button with its label is wrapped in a label tag that uses display: inline-flex. This ensures that the radio button and the label are displayed inline, next to each other.

Spacing: You can adjust the spacing between the radio buttons using margin-right on the .radio-inline class and between the radio button and its label with margin-right on the input.
---
For the input field, you can apply a mask (like the one in maskingConfig) when the value is updated or blurred. You can use onInput to handle changes as the user types, and onBlur to handle the masking functionality when the field loses focus.

Here's how you can implement this:

Steps:
Render the Input Field: Based on the elementType: 'input', render an input field dynamically.
Handle Input and Masking: Use the onInput event to update the form data and apply any masking functions when the field is blurred.
Delay the Masking: Use setTimeout to apply the masking after the blurDelay period, as specified in maskingConfig.
This setup allows you to dynamically render the input field, update the formData, and apply masking when the field is blurred, with a configurable delay. The masking logic is applied only after the delay specified in maskingConfig.blurDelay. You can customize the maskingFn to implement any custom masking behavior, such as formatting the text or replacing special characters with underscores.
Steps:
Add a Submit Button: Create a submit button in your render method.

Form Submission Handler: Create a method to handle the form submission (handleSubmit), which will gather the form data and process it.

Validation: Optionally, perform validation before submitting to ensure the required fields and other validation rules are met.
---
To support the more complex validation structure you've shown, where each validation rule can have a type (like 'required' or 'custom') and an optional validatorFn (for custom validation logic), you need to update your ValidationRule interface to account for these properties.
----
Updated Solution for Handling Fields Outside and Inside Arrays:
To handle this correctly, you can follow these steps:

1. Differentiate Between Array and Non-Array Fields:
Ensure that during the form data submission, you explicitly check whether a field belongs to an array (e.g., manuscript_details) or is a standalone field (e.g., sanjeet).

2. Handle Array Fields and Non-Array Fields Independently:
You need to ensure that the data outside the array is correctly handled without mixing it with the array field. Here's an updated solution to manage this:
---
Identify Array Fields Dynamically:
Instead of hardcoding the field name (manuscript_details), dynamically detect array fields by checking if the key follows an array pattern (arrayField[index].field).
Ensure Both Standalone and Array Fields are Handled Correctly:
The form data should be processed so that array-based and non-array fields are merged correctly.
---
Explanation:
Regular Expression:

The regular expression /^(.*)\[(\d+)]\.(.*)/ matches keys that follow the array pattern arrayField[index].field.
arrayName captures the name of the array (manuscript_details).
index captures the index of the array element (0, 1, 2, etc.).
fieldName captures the field name within the array element (manuscript_title, for example).
Dynamic Handling:

The cleanArrayFields method now works for any array field, not just manuscript_details.
It dynamically identifies fields belonging to arrays and groups them correctly into the array (using the array name and index).
Form Data Cleanup:

The individual array field keys (like manuscript_details[0].manuscript_title) are merged into the main array (manuscript_details) based on the array index.
After processing, the cleaned form data will have a structure where all fields are grouped within their respective arrays and the individual keys are removed.
Example:
----
Steps to Implement Date Field:
Rendering the Date Input:

Check for the elementType being date, and render an <input type="date"> field for it.
Binding the Value:

The value of the date field should be bound to the form data, similar to other input fields.
Handling Validation:

You can add validation to ensure the date field is correctly handled, including checking for required fields or custom date validation.
---
Steps to Implement Combo-Box
UI Layout: You need both an input field for custom input and a select dropdown for predefined options.
State Handling: The combo-box will allow the user to type a value or choose from the options. You will manage the state of the combo-box by toggling between these modes.
Conditional Rendering: Show the combo-box based on the conditionalOn configuration.
---
In StencilJS, components use state management in a different way compared to React. StencilJS components typically store their reactive state in component properties (using @State() decorator) rather than this.state.

we should replace this.state with reactive state properties defined with the @State() decorator in StencilJS. This will allow the state to be automatically tracked and trigger re-renders when updated.
Use the @State() decorator to define reactive state properties for the filtered options and dropdown visibility in your Stencil component.

 @State() filteredOptions: Array<{ label: string, value: string }> = [];
  @State() showDropdown: boolean = false;




