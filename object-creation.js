console.log("using object literal");
var student = {
    'name': 'sudaksha',
    'rollNum' : 1234,
    
}
var type = 'rollNum';
console.log(student.name + " : " + student[type]); // it is used for dynamic keys
console.log(Object.keys(student).join(","));

// console.log("using new keyword for method");

// function sudakshaStudent(name, rollNum) {
//     this.name = name;
//     this.rollNum = rollNum;
// }

// var s1 = new sudakshaStudent('rajesh', 5678);
// console.log(s1.name + " : " + s1.rollNum);
// console.log(typeof s1);
// console.log(s1 instanceof Object);

// console.log("using class");
// class Vm {
//     constructor(name, rollNum) {
//         this.name = name;
//         this.rollNum = rollNum;
//     }
//     printStudent() {
//         console.log(this.name + " : " + this.rollNum);
//     }
// }

// var s2 = new Vm('vikram', 323223);
// s2.printStudent();

// console.log("using object create with object prototype");

// var s3 = Object.create(Object.prototype,
//     {
//         name: {
//             value: 'rahul',
//             configurable: true,
//             writable: true
//         },
//         rollNum: {
//             value: '1234556',
//             configurable: true,
//             writable: true
//         }
//     }
// );

// console.log(s3.name + " : " + s3.rollNum);

// console.log("using object create without our own prototype");
// var s4 = Object.create(student);

// console.log(s4.name + " : " + s4.rollNum);

