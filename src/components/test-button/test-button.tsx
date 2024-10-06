import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';
@Component({
  tag: 'test-button',
  styleUrl: 'test-button.css',
  shadow: true,
})
export class TestButton {
  @Prop() buttonId: string;
  @Prop() color: 'red' | 'green' = undefined;
  @Event() buttonClicked: EventEmitter;

  private handleButtonClicked(e) {
    this.buttonClicked.emit({ event: e, id: this.buttonId });

    document.addEventListener('buttonClicked', handleButtonClicked)
    // let textElement = document.body.querySelector('.test-button')
    let textElement: any = document
    .querySelector('test-button')
    .shadowRoot.querySelector('button + .test-button');
    function handleButtonClicked(e) {
       console.log(e.detail.id, textElement);
      textElement.innerHTML = `${e.detail.id} was clicked`
    }
  }

  render() {
    return (
      <Host>
        <h1>Test Button</h1>
        <button onClick={event => this.handleButtonClicked(event)}
                id={this.buttonId}
                class={this.color ? 'button-'+ this.color : 'button-default'}>
          <slot></slot>
        </button>
        <div class="test-button"></div>
      </Host>
    );
  }
}
