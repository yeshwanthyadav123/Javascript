var obj= {
      
    Name:'pranavi',
	age:20,
	Department:'cse',
	Gender:'Female',
	Area:'Hyderabad',
	Proper:'vizag',
	Fathername:'Rama Krishna',
	College:'Sri Gayatri',
	Degree:'B.tech'
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
 document.getElementById("records").innerHTML=t