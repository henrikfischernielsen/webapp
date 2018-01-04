import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
    selector: 'select-input',
    templateUrl: './select.component.html'
    
})
    

export class SelectComponent {
   
    @Input() name: string;
    @Input() setchecked: string ;    
    @Input() value: string;
    @Input() defaultChoice: string;
    @Output() userUpdated = new EventEmitter<string>();


    selectdata: any = {
        optionvalue: [{
            display: 'Denmark',
            value: 'DK',            
        },
        {
            display: 'Sweden',
            value: 'SWE',            
        }
        ],
        family: [],
        acquaintances: [],
    };


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

    onGroupChange(event: string) {
        console.log("onGroupChange:" + event)
    }


}


