import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'popover',
    templateUrl: './popover.component.html',
    //styleUrls: ['./popover.component.scss'],
    animations: [
        trigger('popOverState', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                opacity: 0
            })),
            transition('show => hide', animate('600ms ease-out')),
            transition('hide => show', animate('1000ms ease-in'))
        ])
    ]
})
export class PopOverComponent {
    show = false;
    constructor() { }
    get stateName() {
        return this.show ? 'show' : 'hide'
    }
    toggle() {
        this.show = !this.show;
    }
}