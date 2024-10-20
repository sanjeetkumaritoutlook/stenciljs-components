import { Component, h } from '@stencil/core';
import {users_cards} from "./../users-cards/users-cards-model";
//https://medium.com/ionic-book/web-components-how-to-create-a-component-with-stencil-3753c20b1b12
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  componentWillLoad() {
    window.localStorage.removeItem("users_cards")
    window.localStorage.setItem("users_cards", JSON.stringify(users_cards))
  }
  render() {
    return [

      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Ionic PWA Toolkit</ion-title>
        </ion-toolbar>
      </ion-header>,

      <div>
        <p>
          <users-cards></users-cards>
          <hr/>
          <users-cards columns="4" ></users-cards>
        </p>
        <p>
          Welcome to the Ionic PWA Toolkit.
          You can use this starter to build entire PWAs all with
          web components using Stencil and ionic/core! Check out the readme for everything that comes in this starter out of the box and
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <ion-button href='/profile/stencil'>
          Profile page
        </ion-button>
      </div>
    ];
  }
}
