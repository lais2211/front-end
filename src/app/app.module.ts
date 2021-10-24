/*modulos*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { InputTextModule } from "primeng/inputtext";
import { HttpClientModule } from '@angular/common/http';



/*componentes*/

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TableModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
