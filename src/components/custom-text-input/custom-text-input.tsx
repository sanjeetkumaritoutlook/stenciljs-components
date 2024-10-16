import {
  Component,
  h,
  State,
  AttachInternals,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'custom-text-input',
  styleUrl: 'custom-text-input.css',
  shadow: true,
  formAssociated: true,
})
export class CustomTextInput {
  @State() value: string;
  @Event() customInput: EventEmitter<string>;

  @AttachInternals() internals: ElementInternals;

  handleChange(event) {
    // console.log(event.target.value);

    this.value = event.target.value;
    this.internals.setFormValue(event.target.value);

    this.customInput.emit(this.value);
  }

  componentWillLoad() {
    this.internals.setFormValue('a default value');
  }

  render() {
    return (
      <label>
        Custom Text Input:
        <input
          type="text"
          value={this.value}
          onInput={(event) => this.handleChange(event)}
        />
      </label>
    );
  }
}
