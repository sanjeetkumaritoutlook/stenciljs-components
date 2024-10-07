import { h, Component, Event, EventEmitter, Prop } from '@stencil/core';

export interface SlideValue {
  value: number;
}

export interface AdvancedType {
  one: number;
  two: string;
  three: number[];
}

//this is from demo by ionic team: https://github.com/ionic-team/stencil-ds-plugins-demo

@Component({
  tag: 'slider-component',
  // styleUrl: 'slider-component.css',
  shadow: true,
  styles: `
    :host {
      background-color: red;
    }
    input {
      padding: 10px;
    }
  `,

})
export class SliderComponent {
  @Event() slideChanged!: EventEmitter<SlideValue>;

  @Prop() min: number = 0;

  @Prop() max: number = 10;

  @Prop() advanced: AdvancedType = null;

  @Prop({ mutable: true }) value?: string | null = '';

  changeOccurred = (e: Event) => {
    this.value = (e.currentTarget as HTMLInputElement).value;
    this.slideChanged.emit({
      value: parseInt(this.value, 10),
    });
  };

  render() {
    return (
      <input
        type="range"
        name="points"
        min={this.min}
        max={this.max}
        onChange={this.changeOccurred}
      />
    );
  }
}
