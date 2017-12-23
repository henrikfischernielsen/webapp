import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    private baseUrl: string;
    private http: Http;
    public currentCount = 0;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));
        this.baseUrl = baseUrl;
        this.http = http;
        console.log(http);
        console.log(baseUrl);
    }
        

    public incrementCounter(http:Http) {
        this.currentCount++;                
        this.http.get(this.baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));

    }
}


interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    funny: string;
    summary: string;
}
