import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  constructor(){

  }
  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
     x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
