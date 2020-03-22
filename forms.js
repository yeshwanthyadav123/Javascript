function check() {
    document.getElementById('header').innerHTML = "Welcome to Sudaksha";
    document.getElementById('input1').value = 'Vikram';
    document.getElementById('input2').checked = true;
    console.dir(document.getElementById('header'));
    console.log(document.getElementById('header').innerHTML);
    console.log(document.getElementById('input1').value);
    console.log(document.getElementById('input2').checked);
    document.getElementById("header").style.color = "red";
}
document.addEventListener("DOMContentLoaded", ready);
// "DOMContentLoaded" ---- "event name"
// ready is event handler


function test() {
    console.log(document.getElementById('input1').value);
}

function ready() {
document.getElementById('input1').addEventListener("keyup", test);
    
}