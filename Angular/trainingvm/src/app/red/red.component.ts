import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styles: []
})
export class RedComponent implements OnInit {

  constructor() { }

  redNames = ['vishali', 'salma', 'ayush', 'sathvika', 'yeswanth'];

  ngOnInit() {
  }

  updatedData(data) {
    console.log(data);
  }

}
