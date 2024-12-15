import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'new-card',
  styleUrl: 'new-card.css',
  shadow: true,
})
export class NewCard {
  render() {
    return (
      <Host>
        <h1>New Card</h1>
       <div class="card">
        <h2 class="card-title">Card Title</h2>
        <p class="card-body">This is the card content.</p>
      </div>
      </Host>
    );
  }
}
