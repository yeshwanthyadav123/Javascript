import { Component, OnChanges, SimpleChange, SimpleChanges, OnInit, DoCheck, Input, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router : Router) {
      console.log("here in constructor")
    }

    changePage() {
      this.router.navigate(['/test']);
    }

}
