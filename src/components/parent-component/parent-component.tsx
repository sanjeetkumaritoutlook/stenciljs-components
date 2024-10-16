import { Component, Host, h, Listen, State } from '@stencil/core';
//parent component: parent-component
//child component: embed-component
@Component({
  tag: 'parent-component',
  styleUrl: 'parent-component.css',
  shadow: true,
})
export class ParentComponent {
  @State() value: string;

  @Listen('change', { capture: true })
  handleChange(event: any) {
    this.value = event.target.value;
    console.log(this.value);
  }

  render() {
    return (
      <Host>
        <label>
          Parent Component:
          <input
            type="text"
            value={this.value}
            onInput={(event) => this.handleChange(event)}
          />
        </label>
        <embed-component
          color={this.value}
          onWrite={(event) => console.log(event.detail)}
        ></embed-component>
      </Host>
    );
  }
}
