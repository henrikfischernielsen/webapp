import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

//enableProdMode();

@Component({
    selector: 'radio2-input',
    templateUrl: './radio2.component.html'
    
})
    

export class Radio2Component {
    
    @Input() radioBinder: string;
    @Input() name: string;
    @Input() setchecked: string ;    
    @Input() value: string;
    @Input() valueTemp: string;
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

    onChange(newValue :any) {
        console.log("neValue =" + newValue.target.value);
        console.log("newValue =" + newValue);
        this.userUpdated.emit(newValue);
        console.log("value = " + this.value);
        console.log("name = " + this.name);
        console.log("radioBinder = " + this.radioBinder);
        console.log("valueTemp = " + this.valueTemp);
        this.valueTemp = "hallo der"; 
    }
}

export class Model {

    constructor(
        public firstName = 'FirstName',
        public lastName = 'LastName',) { }
}
