import { Component, OnInit } from '@angular/core';
import {DropdownService} from '../../Services/dropdown.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Country } from 'src/app/Models/country.model';
import { State } from 'src/app/Models/state.model';
import { City } from 'src/app/Models/city.model';
import {FormsModule, NgForm} from '@angular/forms';
import {Customer} from '../../Models/customer.model';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
 private result:String;
private countries:Country[];
 private states:State[];
 private cities:City[];
 private customerDetails:Customer;
 customer=new Customer();
  constructor(private service:DropdownService) { }

  ngOnInit() {
      this.service.getCountry().subscribe(res=>{this.countries=res},
        this.errorCallBack) ;
      }

getStateByid(cid:string):any{
  this.service.getState(cid).subscribe(res=>{this.states=res},
    this.errorCallBack)
}
getCityByid(sid:string):any{
  this.service.getCity(sid).subscribe(res=>{this.cities=res},
    this.errorCallBack)
}

OnSubmitCustomer(form:NgForm):any{
   this.service.insertingCustomer(this.customer).subscribe(res=>{this.customerDetails=res},
    this.errorCallBack)
}
public errorCallBack=(err:HttpErrorResponse):any=>{
if(err.error instanceof Error){
  console.log('clientside error')
}else{
  console.log('server side error')
}
}
}
