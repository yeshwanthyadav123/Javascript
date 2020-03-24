var c;
function add(a, b, callback) {
    console.log(a + b);
    c = a+b;
    callback();
}


function disp() {
    var d = 2;
    d = d *c;
    console.log(d);
    console.log('This must be printed after addition');
}
// disp();
// Calling add() function 
add(5, 6, disp);