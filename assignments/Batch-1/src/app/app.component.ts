import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //   title = 'AngularTraining';
  //   tHeaders = [ 'id', 'name', 'surname' ]
  //   BoysData = [
  //     { id: '1', name:'Harsha', surname: 'Cheekati' },
  //     { id: '2', name:'Uthkarsh', surname: 'Cheekati' },
  //     { id: '3', name:'Rahul', surname: 'PochamReddy' },
  //     { id: '4', name:'Vikram', surname: 'Angirga' }
  //   ]
  //   GirlsData = [
  //     { id: '5', name:'Pranavi', surname: 'P' },
  //     { id: '6', name:'Srija', surname: 'E' },
  //     { id: '7', name:'Priya ', surname: 'B' },
  //     { id: '8', name:'Aruna', surname: 'D' }
  //   ]
  constructor() { }
  checkHeader = "Select/UnSelect";
  checkList = [
    {name: 'Harsha' },
    {name: 'Uthkarsh' },
    {name: 'Rahul' },
    {name: 'Vikram' },
    "String1",
    "String2",
    "String3",
    {name: 'Hello'}
  ]

  checkedList;
  showData=false;
  ParentOutput(NewCheckList) {
    this.showData = !this.showData;
    this.checkedList = NewCheckList;
    
  }

}
