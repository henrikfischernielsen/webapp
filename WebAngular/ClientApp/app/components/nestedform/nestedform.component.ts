import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


import { RadioComponent } from '../directives/radio.component';

import { Person } from '../directives/person.model';

@Component({
    selector: 'my-signup',
    templateUrl: './nestedform.component.html'
})
export class NestedFormComponent {

    people: any = {
        friends: [{
            name: 'Jane',
            age: '66',
            gender: 'female'
        },
        {
            name: 'Bob',
            age: '50',
            gender: 'male'
        }
        ],
        family: [],
        acquaintances: [],
    };

    addFriend() {
        this.people.friends.push(new Person());
    }

    removeFriend(index: number) {
        console.log("Index:" + index);
        //this.people.friends.push(new Person());
    }

    trackByIndex(index: any) {
        console.log("TrackByIndex: " + index)
        return index;
    }

    onPersonChange() {
        console.log('Saw a person change. New list of friends:',
            this.people.friends);
    }

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }

    handleUserUpdated(event: string) {
        console.log("Fisk i nettet=" + event);    
    }

    //handleUserUpdated(event :any ) {
    //    console.log("Fisk i nettet");
    //    this.hidediv = "1";
    //}

    onChange(customerForm: NgForm) {
        let dirty = customerForm.dirty;
        let per = customerForm.pristine;
        let touched = customerForm.touched;
        let valid = customerForm.valid;

    }
}