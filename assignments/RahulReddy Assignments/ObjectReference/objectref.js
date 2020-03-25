
var students = {
      
    id : 100,
    name : 'rahul',
    age : 19,
    dateofb : '07/01/1999',
    gender : 'male',
    qual : 'btech',
    surname : 'pochamreddy',
    section : '4-C',
    arrears : 'zero',
    m1 : 'one',
    m2 : 'two',
    m3 : 'three',
    m4 :  'four',
    m5 : 'five',
    m6 : 'six',
    m7 : 'seven',
    m8 : 'eight',
    m9 : 'nine',
    m10 : 'ten',
    m11 : 'eleven'

};
var k = '<body>';
var l = '<body>';
var objects = Object.keys(students).sort();
for(var p in objects){
  l +='<th>'+ objects[p] + '</th>';
    l += '</body>';
}
document.getElementById("header").innerHTML = l;
objects.forEach(prop =>{
    k +='<td>'+ students[prop] + '</td>';
    k += '</body>';
   
})
 document.getElementById("records").innerHTML=k;
  