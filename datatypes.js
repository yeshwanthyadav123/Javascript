var name = 'sudaksha';
var num = 10;
var isThisTraining = true;
var test;

console.log("Data type of name: " + typeof name);
console.log("Data type of num: " + typeof num);
console.log("Data type of isThisTraining: " + typeof isThisTraining);



var val = null;
var testObj = {};
testArr = [1,2,3];
var print = function () {
    console.log("hello");
}
print();
function print2 () {
    console.log("world");
}

console.log("Data type of val: " + typeof val);
console.log("Data type of testObj: " + typeof testObj);
console.log("Data type of testArr: " + typeof testArr);
console.log("Data type of print: " + typeof print);
console.log("Data type of print2: " + typeof print2);

console.log(typeof undefined);
console.log("Data type of test: " + typeof test);

var a =10;
console.log( a == "10"); //checks only value ad ignores data type
console.log( a === "10"); // checks both value and data type