import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Testinput } from './testinput';
import { RadioComponent } from '../directives/radio.component';

@Component({
    selector: 'my-signup',
    templateUrl: './testinput.component.html'
})
export class TestinputComponent {
    customer: Testinput = new Testinput();

    testString: string = "Hallo der";
    hidediv: string = "0";

    save(customerForm: NgForm) {
        console.log(customerForm.form);
        console.log('Saved: ' + JSON.stringify(customerForm.value));
    }

    handleUserUpdated(event : string) {
        console.log("Fisk i nettet");
        this.hidediv = event;
    }

    //handleUserUpdated(event :any ) {
    //    console.log("Fisk i nettet");
    //    this.hidediv = "1";
    //}

    onChange(customerForm: NgForm) {
        let s = "test";
        this.testString = "Har v�ret her";
        let dirty = customerForm.dirty;
        let per = customerForm.pristine;
        let touched = customerForm.touched;
        let valid = customerForm.valid;

    }
}