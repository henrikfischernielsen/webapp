import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Testinput } from './testinput';
import { RadioComponent } from '../directives/radio.component';

import { Person } from '../directives/person.model';

@Component({
    selector: 'my-signup',
    templateUrl: './testinput.component.html'
})
export class TestinputComponent {

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

    trackByIndex(index :any) {
        return index;
    }

    onPersonChange() {
        console.log('Saw a person change. New list of friends:',
            this.people.friends);
    }


    customer: Testinput = new Testinput();

    testString: string = "Hallo der";
    hidediv: string = "0";

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }

    handleUserUpdated(event : string) {
        console.log("Fisk i nettet=" + event);
        this.hidediv = event;
    }

    //handleUserUpdated(event :any ) {
    //    console.log("Fisk i nettet");
    //    this.hidediv = "1";
    //}

    onChange(customerForm: NgForm) {
        let s = "test";
        this.testString = "Har været her";
        let dirty = customerForm.dirty;
        let per = customerForm.pristine;
        let touched = customerForm.touched;
        let valid = customerForm.valid;

    }
}