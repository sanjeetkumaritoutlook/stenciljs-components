import { Component, Prop, State, h } from '@stencil/core';
//https://forum.ionicframework.com/t/stencil-routing-with-componentprops/123778
//https://github.com/stencil-community/stencil-router
//npm install @ionic/core
import '@ionic/core';
//routing and forms
///https://www.joshmorony.com/building-a-pwa-with-stencil-routing-and-forms/
//https://www.npmjs.com/package/@stencil/router
//https://www.npmjs.com/package/stencil-router-v2
//https://stackoverflow.com/questions/67182261/how-to-pass-history-object-to-stencil-js-component-stencil-router
//npm i stencil-router-v2
import { RouterHistory } from '@stencil/router';
// import { createRouter, Route } from 'stencil-router-v2';

//sample
//https://github.com/ionic-team/ionic-stencil-hn-app
//to avoid below error in stenciljs:Subsequent variable declarations must have the same type. Variable 'AbortSignal' must be of type '
//add in tscondig.json in  "skipLibCheck":true, in compilerOptions
//ion-page donest have height https://github.com/ionic-team/ionic-framework/issues/14432
//https://github.com/PaulHalliday/Ionic-4-Vue.js/blob/master/src/App.vue
//https://stackoverflow.com/questions/50265268/ion-content-wont-show-when-using-ionic-core-4
//https://ionicframework.com/docs/api/content
@Component({
  tag: 'simple-form',
  styleUrl: 'simple-form.css',
  shadow: true,
})
export class SimpleForm {
  //@Prop() match: MatchResults;
  @Prop() firstName: string;
  @Prop() lastName: string;
  //in React: https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
  @Prop() history: RouterHistory;
  timer: number;

  @State() time: number = Date.now();
  @State() name: string = '';
  @State() email: string = '';
  handleClick() {
    this.history.push("/profile/CatInTheHat", {
      firstName: "Thing 1",
      lastName: "Thing 2"
     });
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Name:', this.name);
    console.log('Email:', this.email);
  };


  render() {
   // if (this.match && this.match.params.name) {
      return (
        <ion-app>
           <ion-page class="show-page">
        <ion-header>
           <ion-toolbar color='primary'>
          <ion-title>Ionic PWA Simple Form Component</ion-title>
           </ion-toolbar>
        </ion-header>
        {/* <ion-content> */}

        
        <h1>Simple Form built using Ionic components only</h1>
            <form onSubmit={this.handleSubmit}>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input 
              type="text" 
              value={this.name} 
              onInput={(event: any) => this.name = event.target.value} 
              required>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input 
              type="email" 
              value={this.email} 
              onInput={(event: any) => this.email = event.target.value} 
              required>
            </ion-input>
          </ion-item>

          <ion-button expand="full" type="submit">Submit</ion-button>
        </form>
        <ion-card>
        <ion-card-header>
          <ion-card-title>My Stencil Component</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>This is a Stencil component using Ionic under the hood!</p>
          <ion-button>Click Me!</ion-button>
        </ion-card-content>
      </ion-card>
         
        <p>Hello, World! I'm {this.firstName}</p>
          <p>
           these are my friends, {this.firstName} and {this.lastName}.
          </p>
          <p> "Timer": {this.timer} {this.time}</p>
          <p class="app-profile">
          <p> My name was passed in through a route param!</p>
        </p>
        <ion-button onClick={this.handleClick.bind(this)}>
            Profile page
          </ion-button>
          <ion-list>
                <ion-item>
                    <ion-label>I'm an example text...</ion-label>
                    <ion-button>Example button</ion-button>
                </ion-item>
            </ion-list>

            {/* </ion-content> */}


       </ion-page>
    </ion-app>
       
      );
    }
  
    
}
