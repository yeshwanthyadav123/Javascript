var names = [
    { 'name' : 'saichandan'},
    { 'name' : 'rahul'},
    { 'name' : 'rahul'}
];

// for(var i=0; i <names.length; i++){
//     "hello" + names[i].name;
//     console.log( "basic for loop " +names[i].name);
//     if(names[i].name == 'rahul') break;
// }

// names.forEach((student,i) => {
//     console.log(i);
//     console.log("For Each " +student.name);
// })

var filtered = names.filter(s => s.name == 'rahul');
console.log(JSON.stringify(filtered));

var filtered2 = names.find(s => s.name == 'rahul');
console.log(JSON.stringify(filtered2));