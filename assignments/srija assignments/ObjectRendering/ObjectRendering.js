var obj = 
{
  studentname: "srija",
  mothername:"chandrakala",
  fathername:"shiva",
  age:21,
  friend:"pranavi",
  tenthmarks:600,
  intermarks:1000,
  department:"ECE",
  percentage:100,
  grade:"A",
  school:"Narayana CO school",
  state:"Telanagana",
  country:"India",
  district:"Karimanagar",
  mandal:"Karimanagar",
   pincode:505001,
  location:"Hyderbad",
  designation:"engineer",
  height:6,
  weight:50
};
var s = '<body>';
var a = '<body>';
var keys = Object.keys(obj).sort();
for(var i in keys){
  a+='<th>'+ keys[i] + '</th>';
    a += '</body>';
}
document.getElementById("header").innerHTML = a;
keys.forEach(prop =>{
    
    s +='<td>'+ obj[prop] + '</td>';
    s += '</body>';
   
})
 document.getElementById("values").innerHTML=s