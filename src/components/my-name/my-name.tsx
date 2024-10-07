import {
  Component,
  Host,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
} from '@stencil/core';
//decorator similar to Angular , JSX similar to React class component
@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css',
  shadow: true,
})
export class MyName {
  @Prop() name: string; //Props are not editable within components
  //they are passed down from user, like in FLUID Library- allowCustomInput- true
  //EventEmitter propagated upwards from component

  @State() myState = 2;
  @Event() myEvent: EventEmitter;
  logEvent() {
    this.myEvent.emit({ data: 10 });
    console.log('test');
  }

  render() {
    //render similar to React - class component
    // this.myState =5    //This can potentially lead to infinite-loops and other bugs. if kept inside render()
    return (
      <Host>
        <slot></slot>
        <h1>
          Hello, my name is {this.name}. My State is {this.myState}
        </h1>
        <button onClick={() => this.logEvent()}>Test</button>
      </Host>
    );
  }
}
