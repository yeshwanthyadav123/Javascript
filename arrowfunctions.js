// var print = () => console.log("Hello world");

// print();

var print2 = (name) => "Hello " + name;

console.log(print2('rajesh'));

var operation = (type,a,b) => {
    console.log(type + ':' + a + ':' + b)
    if(type === 'add') {
        return a + b;
    } else if (type === 'multiply') {
        return a*b;
    }
}

var result = operation('add' , 5,4);
console.log(result);