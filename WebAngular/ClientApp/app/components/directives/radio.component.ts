import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { Testinput } from './radio';

@Component({
    selector: 'radio-input',
    templateUrl: './radio.component.html'
    
})
    

export class RadioComponent {
    customer: Testinput = new Testinput();
   
    @Input() name: string;
    @Input() setchecked: string ;    
    @Input() value: string;
    @Input() defaultChoice: string;
    @Output() userUpdated = new EventEmitter<string>();


    ngOnInit() {
        console.log(this.value);
        console.log(this.setchecked);
        console.log(this.name);
        console.log(this.defaultChoice);
    }

    onClick() {
        if (this.value == "yes")
        {
            this.userUpdated.emit("1");
        } else
        {
            this.userUpdated.emit("0");
        }
        
    }

    onChange(customerForm: this) {
      
        //if (this.value == "yes") {
        //    this.userUpdated.emit("1");
        //} else {
        //    this.userUpdated.emit("0");
        //}
    }
}

export class Model {

    constructor(
        public firstName = 'FirstName',
        public lastName = 'LastName',) { }
}
