import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  

@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule ,  
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
