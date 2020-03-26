var obj= {
    FName:'pranavi',
	Mname:'..',
	Lname:'thota',
	Age:20,
	Gender:'Female',
	Department:'cse',
	State:'Telangana',
	City:'Warangal',
	Proper:'vizag',
	Fathername:'Srinivas Rao',
	FQualification:'LIC',
	Mothetname:'Jayasudha',
    Mqualification:'Home maker',
	College:'Vaagdevi',
	Degree:'B.tech',
	Branch:'CSE',
	Hobbies:'playing shyttle',
	Subject:'C lang',
	School:'Greenwood',
	Inter:'SR '
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