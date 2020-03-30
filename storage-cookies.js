
function setLocalStorage() {
    var emp = {
        name : 'jdsk',
        id : 1
    }
    localStorage.setItem('name', JSON.stringify(emp));
    console.log(JSON.parse(localStorage.getItem('name')));
}

setLocalStorage();


function setSessionStorage() {
    sessionStorage.setItem('name', 'vikram');
    console.log(sessionStorage.getItem('name'));
}

// setSessionStorage();


// function addCookie() {
//     var cid = document.getElementById('id1').value;
//     var cvalue = document.getElementById('name').value;
//     var d = new Date();
//     d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cid + "=" + cvalue +";" + expires + ";path=/";
// }
// function listCookies() {
//     var result = document.cookie;
//     document.getElementById("list").innerHTML = result;
// }
// function removeCookies() {
//     var res = document.cookie;
//     var multiple = res.split(";");
//     for (var i = 0; i < multiple.length; i++) {
//         var key = multiple[i].split("=");
//         document.cookie = key[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
//     }
// }