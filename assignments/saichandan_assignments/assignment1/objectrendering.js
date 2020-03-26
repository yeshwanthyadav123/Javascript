var aboutMyself = {
      
    id : 1,
    name : 'chandan',
   
    age : 21,
    dateofbirth : '28/11/1998',
    gender : 'male',
    
   planet:'earth',
    land: 'water',
    water:'milk',
    english :'hindi',
    tamil : 'telugu',
    easy : 'hard',

    kareena :'saif',
    ajay :'kajol',
    deepika :'ranveer',
    virat :'anushka',
    alia:'ranbir',
    ileana:'chandan',
    onemoreobject:'cantThinkOfAnythingElse',
    corona: 'damnyou'
    

};
var a = '<body>';
var b = '<body>';
var objects = Object.keys(aboutMyself).sort();
for(var p in objects){
  b +='<th>'+ objects[p] + '</th>';
    b += '</body>';
}
document.getElementById("body").innerHTML = b;
objects.forEach(prop =>{
    a +='<td>'+ aboutMyself[prop] + '</td>';
    a += '</body>';
   
})
 document.getElementById("aboutMe").innerHTML=a;