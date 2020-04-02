import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    InputComponent,
    CheckboxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }