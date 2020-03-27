function Datafetching(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) 
            {
                var data=xmlhttp.response;
                var rawdata=JSON.parse(data);
                var objects = rawdata;
                var columns = [];
                for (var rows = 0; rows < objects.length; rows++) {
                    var records = {};
                    records.Id = objects[rows].id;
                    records.Name = objects[rows].name;
                    records.Username = objects[rows].username;
                    records.City = objects[rows].address.city;
                    records.Postalcode = objects[rows].address.zipcode;
                    records.Mobilenumber = objects[rows].phone;
                    records.BS = objects[rows].company.bs;
                    columns.push(records);
                }
                var table=document.createElement("table");
                table.setAttribute("id","myTable");
                var tablerow=table.insertRow(-1);
                let headerKeys = Object.keys(columns[0])
                var tablehead = document.createElement("th");
                tablehead.innerHTML="DeleteRow";
                tablerow.appendChild(tablehead);
                headerKeys.forEach( element => {
                    var tablehead = document.createElement("th");
                    tablehead.innerHTML = element;
                    tablerow.appendChild(tablehead);
                })
                for (var i = 0; i < columns.length; i++) { 
                    tablerow = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tablerow.appendChild(button);
                    for (let eachKey in columns[i]) {      
                        
                        var tablecell = tablerow.insertCell(-1);
                        tablecell.innerHTML = columns[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("data");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (xmlhttp.status == 400) {
               alert('There was an error 400');
            }
        }
    }
    xmlhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xmlhttp.send();
}
function removeRow(button) 
{
    document.getElementById('myTable').deleteRow(button.parentNode.rowIndex);    
}
