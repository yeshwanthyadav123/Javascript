import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayersComponent } from './players/players.component';
import {FormsModule} from '@angular/forms';

  import { from } from 'rxjs';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';


@NgModule({
  declarations: [
    AppComponent,
  
    PlayersComponent,
  
    PlayerdetailsComponent
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
