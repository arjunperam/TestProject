import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from "src/app/Models/country.model";
import{Customer} from '../Models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class DropdownService {
// private apiURL:string;
private countries:Country[];
  constructor(private http:HttpClient) { }

  getCountry():any{
  return this.http.get("http://localhost:5399/api/DropDownList/Countrydetails/");
}
getState(id:string):any{
    return this.http.get("http://localhost:5399/api/DropDownList/Statedetails/"+id);
}
getCity(id:string):any{
  return this.http.get("http://localhost:5399/api/DropDownList/CityDetails/"+id);
}
insertingCustomer(cust:Customer):any{
  return this.http.post("http://localhost:5399/api/DropDownList",cust)
}
}
