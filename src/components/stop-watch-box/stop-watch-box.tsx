import { Component, State, h } from '@stencil/core';
import { WatchService } from '../../services/watch-service';
//parent component: stop-watch-box
//child component: stop-watch
@Component({
  tag: 'stop-watch-box',
  styleUrl: 'stop-watch-box.css',
  shadow: true,
})
export class StopWatchBox {
   // logic for starting, stopping and resetting the stop watch
   private hh = 0;
   private mm = 0;
   private ss = 0;
   private ms = 0;
 
   //The difference between @State and @Prop is that
   //the view is not re-rendered if something changes in a @Prop.
   //But if any of the @State models change, the view is rendered again.
 
   @State() hours = '00'; // values are passed to Prop in its child component- stop-watch
   @State() minutes = '00'; //similar to useState in React
   @State() seconds = '00';
   @State() milliseconds = '00';
   timer: any = null;
   @State() isTimerRunning = false;
   watchService = new WatchService();
 
   start() {
     this.isTimerRunning = true;
     this.timer = setInterval(() => {
       this.updateTime();
     }, 10);
   }
 
   updateTime() {
     this.ms++;
     if (this.ms >= 100) {
       this.ms = 0;
       this.ss++;
       if (this.ss >= 60) {
         this.ss = 0;
         this.mm++;
         if (this.mm >= 60) {
           this.mm = 0;
           this.hh++;
         }
       }
     }
     this.setTime();
   }
 
   setTime() {
     this.hours = this.watchService.getTimeString(this.hh);
     this.minutes = this.watchService.getTimeString(this.mm);
     this.seconds = this.watchService.getTimeString(this.ss);
     this.milliseconds = this.watchService.getTimeString(this.ms);
   }
 
   stop() {
     this.isTimerRunning = false;
     clearInterval(this.timer);
   }
 
   clear() {
     this.hh = 0;
     this.mm = 0;
     this.ss = 0;
     this.ms = 0;
     this.setTime();
   }
 
   render() {
     return (
       <div class="watch-box">
         <div class="watch-container">
           <stop-watch
             hours={this.hours}
             minutes={this.minutes}
             seconds={this.seconds}
             milliseconds={this.milliseconds}
           ></stop-watch>
         </div>
         <div class="actions-container">
           <button onClick={() => this.start()} disabled={this.isTimerRunning}>
             Start
           </button>
           <button onClick={() => this.stop()} disabled={!this.isTimerRunning}>
             Stop
           </button>
           <button onClick={() => this.clear()} disabled={this.isTimerRunning}>
             Clear
           </button>
         </div>
       </div>
     );
   }
 
}
