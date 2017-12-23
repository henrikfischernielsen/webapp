import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@Component({
    selector: 'fetchdataAnimation',
    templateUrl: './fetchdataAnimation.component.html',
    
    animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class FetchDataAnimationComponent {
    state: string ='small'

    animateMe() {
        this.state = (this.state === 'in' ? 'out' : 'in')
    }
}

