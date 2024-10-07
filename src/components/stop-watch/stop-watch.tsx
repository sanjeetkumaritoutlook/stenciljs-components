import { Component,  h, Prop } from '@stencil/core';
//parent component: stop-watch-box
//child component: stop-watch
@Component({
  tag: 'stop-watch',
  styleUrl: 'stop-watch.css',
  shadow: true,
})
export class StopWatch {
   //@Prop values will be passing these from its parent component- stop-watch-box
   @Prop() hours: string;
   @Prop() minutes: string;
   @Prop() seconds: string;
   @Prop() milliseconds: string;
   render() {
     return (
       <div class="watch-wrapper">
         <div class="watch">
           <div class="unit">{this.hours}</div>
           <div class="sep"> : </div>
           <div class="unit">{this.minutes}</div>
           <div class="sep"> : </div>
           <div class="unit">{this.seconds}</div>
           <div class="sep"> : </div>
           <div class="unit">{this.milliseconds}</div>
         </div>
       </div>
     );
   }
 
}
