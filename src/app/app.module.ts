import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './Components/drop-down/drop-down.component';
import{HttpClientModule} from "@angular/common/http";
import{DropdownService} from "src/app/Services/dropdown.service";
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  ],
  providers: [DropdownService],
  bootstrap: [DropDownComponent]
})
export class AppModule { }
