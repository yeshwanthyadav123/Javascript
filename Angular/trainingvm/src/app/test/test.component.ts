import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  names = ['SASHI', 'saichandan', 'harish', 'uthkarsh', 'sushma'];

  ngOnInit() {
  }

  updatedData(data) {
    console.log(data);
  }

}
