import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {

  @Input() checkHeader: any;
  @Input() checkList: any;
  @Output() ChildOutputItem = new EventEmitter<any>();

  selectAll(event) {
    let status = false;
    status = event.target.checked;
    this.NewCheckList.forEach(item => item.selected = status);
    // console.log(this.NewCheckList);

    // this.checkList.forEach(item => item.selected = checked);
    // this.checkList.forEach(item => item.selected = true);
    // status = true;
    //   this.checkvalue=true;
    //   for (let index = 0; index < this.checkList.length; index++) {
    //    this.checkList[index].selected=true;
    //    this.checkedList.push(this.checkList[index].name);
    //   }
    // } else{
    // status = false;
    //   this.checkvalue=false;
    //   for (let index = 0; index < this.checkList.length; index++) {
    //     this.checkList[index].selected=false;
    //     this.checkedList.splice(this.checkList[index].name);
    //    }
    // }
    // console.log(this.checkedList);
  }

  showData = false;
  ChildOutput(NewCheckList) {
    console.log(NewCheckList);
    this.showData = !this.showData;
    this.ChildOutputItem.emit(NewCheckList);

  }
  // {name: 'Harsha' },
  //   {name: 'Uthkarsh' },
  //   {name: 'Rahul' },
  //   {name: 'Vikram' },
  //   "String1",
  //   "String2"
  //   {name: "String1"}
  //   {name: "String2"}
  constructor() { }
  NewCheckList: any[] = [];
  ngOnInit(): void {
    for (let item = 0; item < this.checkList.length; item++) {

      if (typeof (this.checkList[item]) == 'string') {
        let string = this.checkList[item];
        //this.checkList.splice(this.checkList.indexOf(string));
        let newProp = {}
        newProp['name'] = string;
        newProp['selected'];
        this.NewCheckList.push(newProp);
      } else {
        this.NewCheckList.push(this.checkList[item]);
      }
    }
    console.log(this.NewCheckList);

  }

  // onChange(e1){
  //   if (e1.target.checked) {
  //     this.checkList[0].selected=true;
  //     this.checkedList.push(e1.target.value);
  //   } 
  //   if (!e1.checked) {
  //     let index = this.checkedList.indexOf(e1.target.value);
  //     if (index > -1) {
  //       this.checkedList.splice(index,1);
  //     }
  //   }
  //   console.log(this.checkedList);
  // }

}
