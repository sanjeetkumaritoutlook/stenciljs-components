import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
import { apiData } from './types';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @State() count: number = 0;
  @State() data: apiData;

  @Event() myEvent: EventEmitter<apiData>;

  // @Listen('click', {capture: true})
  handleClick = () => {
    this.count = this.count + 1;
    this.myEvent.emit(this.data);
  };

  connectedCallback() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => (this.data = json));
  }

  render() {
    return (
      <Host>
        <h1>My Button component</h1>
        <h1>{this.count}</h1>
        <slot name="choose"></slot>
        <h2 class="dynamic api data">{this.data ? this.data.title : 'loading...'}</h2>
        <slot></slot>
        <button onClick={this.handleClick}>{this.text}</button>
      </Host>
    );
  }
}
