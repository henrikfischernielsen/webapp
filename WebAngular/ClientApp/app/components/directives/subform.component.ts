import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Person } from './person.model';
import { Input, Component, EventEmitter, Output } from '@angular/core';
//import { AuditingDisplayStringsProvider } from '../../../../../application-strings-EN';

@Component({
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SubFormComponent,
        multi: true,
    }],
    selector: 'person',
    templateUrl: './subform.component.html'
})
export class SubFormComponent implements ControlValueAccessor {
    onChange: any;
    person: Person;
    @Input() value: string;
    @Input() valueMore: string;
    @Input() name: string;

    writeValue(value: any): void {
        console.log('writeValue called with:', value);
        if (value) {
            this.person = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = () => {
            console.log('Propagating change');
            fn(this.person);
        }
    }

    registerOnTouched(_fn: any): void {
        return;
    }
}


