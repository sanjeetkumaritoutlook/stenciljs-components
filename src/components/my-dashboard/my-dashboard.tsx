import { Component,Listen,Prop, h } from '@stencil/core';
import '@ionic/core';
//https://ionicframework.com/docs/api/toast
//https://stackoverflow.com/questions/45588290/proper-way-to-handle-toast-notifications-in-ionic-app
//https://github.com/WebNextNative/web-components/tree/master
//https://ionicframework.com/docs/api/router
//https://medium.com/ionic-book/web-components-how-to-create-a-component-with-stencil-3753c20b1b12
@Component({
  tag: 'my-dashboard',
  styleUrl: 'my-dashboard.css',
  shadow: true,
})
export class MyDashboard {
  //@Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  // @Listen('window:swUpdate')
  // async onSWUpdate() {
  //   const toast = await this.toastCtrl.create({
  //     message: 'New version available',
  //     showCloseButton: true,
  //     closeButtonText: 'Reload'
  //   });
  //   await toast.present();
  //   await toast.onWillDismiss()
  //   window.location.reload();
  // }

  render() {
    return (
      <ion-app>
       <ion-page>
        <ion-router useHash={false}>
          <ion-route url='/' component='app-home'></ion-route>
          <ion-route url='/profile/:name' component='app-profile'></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
        </ion-page>
        </ion-app>
    );
  }
}
