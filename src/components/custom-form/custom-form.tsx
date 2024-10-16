import { Component, h, State } from '@stencil/core';
//has two stencilJS components under: combo-box , custom-text-input
interface formData {
  email: string;
  phone: string;
  select1: string;
  select2: string;
  customText: string;
  comboBox: object;
}

@Component({
  tag: 'custom-form',
  styleUrl: 'custom-form.css',
  shadow: true,
})
export class CustomForm {
  selectedReceiverIds = [102, 103];
  @State() value: string;
  @State() phone: string;
  @State() selectValue: string;
  @State() secondSelectValue: string;
  @State() avOptions: any[] = [
    { id: 101, name: 'Mark' },
    { id: 102, name: 'Smith' },
  ];
  @State() formData: formData;

  @State() customText: string;
  @State() comboBox: object;

  handleSubmit(e) {
    e.preventDefault();
    this.formData = {
      email: this.value,
      phone: this.phone,
      select1: this.selectValue,
      select2: this.secondSelectValue,
      customText: this.customText,
      comboBox: this.comboBox,
    };
    console.log(this.formData);
  }

  handleChange(event) {
    this.value = event.target.value;

    if (event.target.validity.typeMismatch) {
      console.log('this element is not valid');
    }
  }

  handlePhoneChange(event) {
    this.phone = event.target.value;
  }

  handleSelect(event) {
    console.log(event.target.value);
    this.selectValue = event.target.value;
  }

  handleSecondSelect(event) {
    console.log(event.target.value);
    this.secondSelectValue = event.target.value;
  }

  handleCustomText(event) {
    console.log(event.detail);
    this.customText = event.detail;
  }

  handleComboBox(event) {
    console.log(event.detail);
    this.comboBox = event.detail;
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>Custom form</h1>
        <combo-box
          allowInput={true}
          label={'Select/Type:'}
          onComboBoxInput={(e) => this.handleComboBox(e)}
        ></combo-box>

        {/* <custom-text-input name="my-custom-input"  form-associated></custom-text-input> */}
        <custom-text-input
          form-associated
          onCustomInput={(e) => this.handleCustomText(e)}
        ></custom-text-input>

        <label>
          Email:
          <input
            type="email"
            value={this.value}
            onInput={(e) => this.handleChange(e)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="phone"
            value={this.phone}
            onInput={(e) => this.handlePhoneChange(e)}
          />
        </label>
        <br />
        <select onInput={(event) => this.handleSelect(event)}>
          <option value="volvo" selected={this.selectValue === 'volvo'}>
            Volvo
          </option>
          <option value="saab" selected={this.selectValue === 'saab'}>
            Saab
          </option>
          <option value="mercedes" selected={this.selectValue === 'mercedes'}>
            Mercedes
          </option>
          <option value="audi" selected={this.selectValue === 'audi'}>
            Audi
          </option>
        </select>
        <br />
        <select onInput={(event) => this.handleSecondSelect(event)}>
          {this.avOptions.map((recipient) => (
            <option
              value={recipient.id}
              selected={this.selectedReceiverIds.indexOf(recipient.id) !== -1}
            >
              {recipient.name}
            </option>
          ))}
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
