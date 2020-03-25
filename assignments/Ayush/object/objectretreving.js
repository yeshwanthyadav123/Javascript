var obj= {
      
     id : 1,
    name : 'ayush',
    age : 21,
    gender : 'male',
    phone:984853546,
    hobbie:'cricket',
    college:'gitam college',
    fathername:'satish',
    mothername:'kiran',
    school:'montessori em school',
	branch:'cse',
	food:'veg'
	
   
   
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