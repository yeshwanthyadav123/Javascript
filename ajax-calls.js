// AJAX stands for Asynchronous JavaScript And XML.

function fetchData() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
            }
            else if (xmlhttp.status == 400) {
               alert('There was an error 400');
            }
         }
    }

    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xmlhttp.send();

}

function postData() {
    var xmlhttp = new XMLHttpRequest();
    var data = {
        "title": "hello everyone",
        "body": "Welcome to Value Momentum"
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
            }
            else if (xmlhttp.status == 400) {
               alert('There was an error 400');
            }
         }
    }

    xmlhttp.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xmlhttp.send(JSON.stringify(data));
}

fetchData();