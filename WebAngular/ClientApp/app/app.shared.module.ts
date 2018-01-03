import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { FetchDataAnimationComponent } from './components/fetchdataAnimation/fetchdataAnimation.component';
import { CounterComponent } from './components/counter/counter.component';
import { PopOverComponent } from './components/popover/popover.component';
import { CustomerComponent } from './components/customers/customer.component';
import { TestinputComponent } from './components/testinput/testinput.component';
import { NestedFormComponent } from './components/nestedform/nestedform.component';

import { RadioComponent } from './components/directives/radio.component';
import { Radio2Component } from './components/directives/radio2.component';
import { SubFormComponent } from './components/directives/subform.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        FetchDataAnimationComponent,
        HomeComponent,
        PopOverComponent,
        CustomerComponent,
        TestinputComponent,
        RadioComponent,
        Radio2Component,
        SubFormComponent,
        NestedFormComponent,
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,                
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-data-animation', component: FetchDataAnimationComponent },
            { path: 'pop-over', component: PopOverComponent },
            { path: 'customer', component: CustomerComponent },            
            { path: 'testinput', component: TestinputComponent },                        
            { path: 'nestedform', component: NestedFormComponent },                        
            { path: '**', redirectTo: 'home' }                
        ])
        
    ]
})
export class AppModuleShared {
}
