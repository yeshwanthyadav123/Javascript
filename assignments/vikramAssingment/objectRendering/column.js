var students = {
      
    ID : 1656718901,
    NAME : 'vikram',
    AGE : 21,
    DOB : '28/02/1998',
    GENDER : 'male',
    QUAL : 'btech',
    SURNAME : 'Angirga',
    BRANCH:'INF',
    SCHOOL:'Kakatiya HS',
	CGPA:8.8,
    INTER:'Narayana',
	MARKS:963,
    HOBBIES:'playing cricket',
    INTER:'Narayana',
	MARKS:963,
    BRANCH:'INF',
    SCHOOL:'Kakatiya HS',
	CGPA:8.8,
    INTER:'Narayana',
	NUMBER:7013314554

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