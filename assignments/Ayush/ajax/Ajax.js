function fetchData(){
    var x=new XMLHttpRequest();
    
    x.onreadystatechange = function() {
        if (x.readyState == XMLHttpRequest.DONE) {
            if (x.status == 200) 
            {
                var data=x.response;
                var rawObj=JSON.parse(data);
                var obj = rawObj
                var col = [];
                for (var i = 0; i < obj.length; i++) {
                    var object = {};
                    object.id = obj[i].id;
                    object.name = obj[i].name;
                    object.username = obj[i].username;
                    object.city = obj[i].address.city;
                    object.zipcode = obj[i].address.zipcode;
                    object.phone = obj[i].phone;
                    object.bs = obj[i].company.bs;
                    // for (var key in rec) {
                    //     if (col.indexOf(key) === -1) {
                    //         col.push(key);
                    //     }
                    // }
                    col.push(object);
                }
                var table=document.createElement("table");
                table.setAttribute("id","myTable");
                var tr=table.insertRow(-1);
                let headerKeys = Object.keys(col[0])
                var th = document.createElement("th");
                th.innerHTML="Delete";
                tr.appendChild(th);
                headerKeys.forEach( element => {
                    var th = document.createElement("th");
                    th.innerHTML = element;
                    tr.appendChild(th);
                })
                for (var i = 0; i < col.length; i++) { // iterating the whole ObejctRecodrs
                    tr = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tr.appendChild(button);

                    for (let eachKey in col[i]) {       //Iterating Each CellData
                        
                        var tableCell = tr.insertCell(-1);
                        tableCell.innerHTML = col[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("paragraph");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (x.status == 400) {
               alert('There was an error 400');
            }
        }
    }
    x.open("GET","https://jsonplaceholder.typicode.com/users",true);
    x.send();
}
function removeRow(oButton) 
{
    document.getElementById('myTable').deleteRow(oButton.parentNode.rowIndex);    
}