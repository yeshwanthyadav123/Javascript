import { Component, OnInit } from '@angular/core';  
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
name:any={};
  constructor() { }  
  dataarray:any=[];
  ngOnInit() {
this.dataarray.push(this.name);
  }
  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  addForm()
  {
    name;
    this.dataarray.push(this.name);
    this.name={};
  }

  removeForm(index)
  {
    this.dataarray.splice(index,1);
  }

  onsubmit()
  {
    console.log(this.dataarray);
  }
  moveup(index:number){
    if(index>=1){
      this.swap(index,index+1)
    }
  }
  swap(x:any,y:any){
    var b=this.dataarray[x];
    this.dataarray[x]=this.dataarray[y];
    this.dataarray[y]=b;
  }
  movedown(index:number){
    if(index<this.dataarray.length-1){
      this.swap(index,index+1);
    }
  }
  
}




