import { Component, Element, State, h } from '@stencil/core';
//npm install @stripe/stripe-js
import { loadStripe,StripeCardElement,StripeElements } from '@stripe/stripe-js';

@Component({
  tag: 'my-payment-gateway',
  styleUrl: 'my-payment-gateway.css',
  shadow: false, //to avoid Stripe IntegrationError: Elements cannot be mounted in a ShadowRoot. Please mount in the Light DOM.
})
export class MyPaymentGateway {
  @Element() element: HTMLElement;
  @State() stripe: any;
  @State() elements: StripeElements; // Store the Stripe elements object
  @State() cardElement: StripeCardElement;
  @State() cardError: string = '';

  stripePublishableKey: string = 'pk_test_51Q6oqKI6cnbaLoyPKiwQKK6aJiGEaN7eh1wD5wzYcqS9UwROVWxzj2HQsE7NDDjKVR5cCUxra7nUYqZrYFFMGe5d00chveqT2I';
  private cardElementContainer: HTMLElement; // Reference to the card element container

  async componentWillLoad() {
    // Load the Stripe object before the component renders
    this.stripe = await loadStripe(this.stripePublishableKey);
   
     }
//componentDidRender():Called after every render().: which can cause infinite loop
async componentDidLoad() {
   // After the component is loaded, create and mount the card element
    // Ensure that the container reference is available before mounting
    if (this.stripe) {
        // Create a Stripe elements instance after component has been loaded
        this.elements = this.stripe.elements();
      // Create the Stripe card element
  this.cardElement = this.elements.create('card');
  // Check if the container is available before mounting
  if (this.cardElementContainer) {
    // Mount the card element to the container
  this.cardElement.mount(this.cardElementContainer); // Use ref instead of querySelector
    }else {
      console.error('Card element container is not available');
    }
  } else {
    console.error('Stripe object not loaded.');
  }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();

    const { error, paymentMethod } = await this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardElement,
    });

    if (error) {
      this.cardError = error.message;
    } else {
      // Process payment with your backend (send paymentMethod.id)
      console.log('Payment method created:', paymentMethod);
    }
  }

  render() {
    return (
      <div>
        <h1>Stripe JS payment Gateway</h1>
        <h1>for testing in local over HTTP: use India card numbers: 4000003560000008</h1>
        <h1>there are other  payment gateways also like PayPal or Razorpay</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
           {/* Attach the ref directly to the div to ensure it can be mounted */}
        <div id="card-element" ref={(el) => (this.cardElementContainer = el)}></div>  {/* Use ref to attach to the DOM */}
          {this.cardError && <p>{this.cardError}</p>}
          <button class="stripe-pay" type="submit">Pay</button>
        </form>
      </div>
    );
  }
}
