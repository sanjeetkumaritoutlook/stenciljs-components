import { Component, Listen, Prop, State,h } from '@stencil/core';
import { urlB64ToUint8Array } from '../../utils/utils';
import {users_cards} from "./../users-cards/users-cards-model";
@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  //@Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;
  @Prop() name: string;

  @State() notify: boolean;
  @State() swSupport: boolean;

  // demo key from https://web-push-codelab.glitch.me/
  // replace with your key in production
  publicServerKey = urlB64ToUint8Array('BBsb4au59pTKF4IKi-aJkEAGPXxtzs-lbtL58QxolsT2T-3dVQIXTUCCE1TSY8hyUvXLhJFEUmH7b5SJfSTcT-E');

  componentWillLoad() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      this.swSupport = true;
    } else {
      this.swSupport = false;
    }

    window.localStorage.removeItem("users_cards")
    window.localStorage.setItem("users_cards", JSON.stringify(users_cards))
  }


  @Listen('ionChange')
  subscribeToNotify($event: CustomEvent) {
    console.log($event.detail.checked);

    if ($event.detail.checked === true) {
      this.handleSub();
    }
  }

  handleSub() {
    // get our service worker registration
    navigator.serviceWorker.getRegistration().then((reg) => {

      // check if service worker is registered
      if (reg) {
        // get push subscription
        reg.pushManager.getSubscription().then((sub) => {

          // if there is no subscription that means
          // the user has not subscribed before
          if (sub === null) {
            // user is not subscribed
            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.publicServerKey
            })
              .then((sub: PushSubscription) => {
                // our user is now subscribed
                // lets reflect this in our UI
                console.log('web push subscription: ', sub);
                this.notify = true;
              })
          }
        })
      }
    })
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-buttons slot="start">
            <ion-back-button defaultHref='/'></ion-back-button>
          </ion-buttons>

          <ion-title>Ionic PWA Toolkit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <div>
        <p>
          <users-cards></users-cards>
          <hr/>
          <users-cards columns="4" ></users-cards>
        </p>

        {this.swSupport ? <ion-item>
          <ion-label>Notifications</ion-label>
          <ion-toggle checked={this.notify} disabled={this.notify}></ion-toggle>
        </ion-item> : null}
      </div>
    ];
 
}
}