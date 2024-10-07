import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
// Stencil's h import is an equivalent to React's React.createElement.

@Component({
  tag: 'nice-alert',
  styleUrl: 'nice-alert.css',
  shadow: true,
})
export class NiceAlert {
  // input passed to the component
  @Prop() message: string;
  // event emitted from the component
  @Event() alertDismissed: EventEmitter;

  // triggers on `Yes` button click
  yes() {
    this.alertDismissed.emit(true);
  }
  // triggers on `No` button click
  no() {
    this.alertDismissed.emit(false);
  }
  render() {
    return (
      <div>
        <div class="message"> {this.message} </div>
        <div class="actions">
          <button onClick={() => this.yes()}>Yes</button>
          <button onClick={() => this.no()}>No</button>
        </div>
      </div>
    );
  }

}
