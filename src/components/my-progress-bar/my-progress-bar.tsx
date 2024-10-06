import { Component,Prop, Element,h } from '@stencil/core';

@Component({
  tag: 'my-progress-bar',
  styleUrl: 'my-progress-bar.scss',
  shadow: true,
})
export class MyProgressBar {
  @Prop() value: number;
  @Prop() max: number = 100;
  @Element() el: HTMLElement;
  render() {
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());
    return (
      <h1>Progress Bar
      <h1>Value {this.value}/{this.max}</h1>
      <div class="progress-container">
       <div class="progress-bar"> </div>
       <div class="progress-bar-remainder" />
     </div>
     </h1>
    );
  }
}
