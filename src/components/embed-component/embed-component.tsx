import {
  Component,
  Host,
  h,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter,
} from '@stencil/core';

@Component({
  tag: 'embed-component',
  styleUrl: 'embed-component.css',
  shadow: true,
})
export class EmbedComponent {
  @State() value: string;
  @Prop() color: string = 'blue';
  @Event() write: EventEmitter<string>;

  @Listen('change', { capture: true })
  handleChange(event: any) {
    this.value = event.target.value;
    console.log(this.value);
    this.write.emit(this.value);
  }

  render() {
    return (
      <Host>
        <div>
          Child Component favorite color is {this.color} {this.value}
        </div>
        <label>
          Embeded Component:
          <input
            type="text"
            value={this.value}
            onInput={(event) => this.handleChange(event)}
          />
        </label>
      </Host>
    );
  }
}
