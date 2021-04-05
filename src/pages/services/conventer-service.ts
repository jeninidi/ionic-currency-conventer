
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

//this class will be available anywhere it is called
//injevtable allows us to use it anywhere in the code
@Injectable()
export class CurrencyService {

    API_KEY = '7488255780c23c61f7a6';

    //by default the http method returns obsevables
    constructor(public http: HttpClient) {}
//with this method we request JSON data from the API, it returns a list of countries with their currency code
    getCountries() {
        //we are using the toPromise() method to make use of async/await functionality
        return this.http.get(`https://free.currencyconverterapi.com/api/v6/currencies?apiKey=${this.API_KEY}`).toPromise();            
    }

    //returns the currency rate of 2 countries
    getExchangeRate(from: String, to: String){
        return this.http.get(`http://free.currencyconverterapi.com/api/v5/convert?q=${from}_${to}&compact=y&apiKey=${this.API_KEY}`).toPromise();    
    }

}