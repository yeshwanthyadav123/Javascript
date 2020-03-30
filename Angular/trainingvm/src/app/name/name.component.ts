import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor() { }

  @Input() names;
  @Output() updatedNames = new EventEmitter();
  currentDate;
  salary = 10000

  ngOnInit() {
    this.currentDate = new Date();
    // this.names = this.names.map(name => name.toUpperCase());
  }
  
  updateBack() {
    console.log(this.names)
    // this.updatedNames.emit(this.names);
  }

}
