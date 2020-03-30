// var student = {
//     'name': 'sudaksha',
//     'rollNum' : 1234,
    
// }
// console.log(student);

function person(name, yearOfBirth){    
    this.name= name; 
    this.yearOfBirth= yearOfBirth;

}


let person1= new person('Jenni', 1986);
console.log(person1);

person.prototype.calculateAge= function(){ 
    console.log('The current age is: '+(2019- this.yearOfBirth)); 
}
person.prototype.myMarks = [1,2,3];
person1.calculateAge();
console.log(person1.myMarks);

// let person1= new person('Jenni', 1986);  
// console.log(person1);
let person2= new person('Madhu', 1997); 
person2.calculateAge();