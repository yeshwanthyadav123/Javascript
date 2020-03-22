// function add() {
// var counter = 0;
    
//     counter = counter + 1;
//     // alert(counter);
//     // return counter;
// }
// console.log(add(0));
// console.log(add(1));
// console.log(add(2));

function add(param1) {
    counter = 0;
    function increment() {
        counter = counter + 1;
        alert(counter);
        // return counter;
    }
    return increment;
}
var checkCounter = add(); // we are returning increment
console.dir(checkCounter);
// console.log(checkCounter());
// console.log(checkCounter());
// console.log(checkCounter());

// function outerFunc(outer_arg) { 

//     function innerFunc(inner_arg) { 
//         return outer_arg + inner_arg; 
//     } 
//     return innerFunc; 
// } 
// var testInnerFunc = outerFunc(5); 

// console.log(testInnerFunc(4)); 
// console.log(testInnerFunc(3)); 