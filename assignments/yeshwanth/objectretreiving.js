
var obj= {
      
    id : 1,
    name : 'yesh',
    age : 21,
    gender : 'male',
    phone:9848,
    hobbie:'music',
    college:'peters enginnering college',
    fathername:'samba siva rao',
    mothername:'jyothi',
    school:'sada siva concept school'

    
   
    
   
};
var t = '<body>';
var a = '<body>';
var keys = Object.keys(obj).sort();
for(var i in keys){
  a+='<th>'+ keys[i] + '</th>';
    a += '</body>';
}
document.getElementById("header").innerHTML = a;
keys.forEach(prop =>{
    
    t +='<td>'+ obj[prop] + '</td>';
    t += '</body>';
   
})
 document.getElementById("records").innerHTML=t;