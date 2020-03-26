function fetchData() {
    var xmlhttp = new XMLHttpRequest();

    
    // xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
            var details = xmlhttp.response;
              var object = JSON.parse(details);

            var tabledata = [];
            for (var i = 0; i < object.length; i++) {
                    var item = {};
                    item.id = object[i].id;
                 item.name = object[i].name;
                item.username = object[i].username;
                    item.city = object[i].address.city;
                item.zipcode = object[i].address.zipcode;
                item.phone = object[i].phone;
                item.bs = object[i].company.bs;

                    tabledata.push(item);
                    //console.log(xmlhttp.responseText);
            }
                //creating table
            var table = document.createElement("table");
                table.setAttribute("id", "fetcheddata");
                var tr = table.insertRow(-1);
                
                
               let headerKeys = Object.keys(tabledata[0]);
               
                headerKeys.forEach(element => {
                    var th = document.createElement("th");
                    th.innerHTML = element;
                    tr.appendChild(th);
                })
                var th = document.createElement("th");
                 th.innerHTML = "Delete";
                 tr.appendChild(th);
                //displaying list
                for (var i = 0; i < tabledata.length; i++) { 
                    tr = table.insertRow(-1);
                    
                    for (let valuekey in tabledata[i]) {

                        var icell = tr.insertCell(-1);
                        icell.innerHTML = tabledata[i][valuekey];
                    }
                    var button = document.createElement('input');
                    button.setAttribute('type', 'button');
                    button.setAttribute('value', 'Delete');
                    button.setAttribute('onclick', 'removeSpecificRow(this);');
                    tr.appendChild(button);
                }
                var tabled = document.getElementById("data");
                tabled.innerHTML = "";
                tabled.appendChild(table);
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
        }
    }
    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xmlhttp.send();

}
//delete function
function removeSpecificRow(deletebutton) {
    document.getElementById('fetcheddata').deleteRow(deletebutton.parentNode.rowIndex);
}