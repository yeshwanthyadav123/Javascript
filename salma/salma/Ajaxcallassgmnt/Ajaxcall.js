
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        var data=xhttp.response;
                var rawdata=JSON.parse(data);
                var objectobj = rawdata;
                var col = [];
                for (var rows = 0; rows < objectobj.length; rows++) {
                    var records = {};
                    records.Id = objectobj[rows].id;
                    records.NAME = objectobj[rows].name;
                    records.USERNAME = objectobj[rows].username;
                    records.CITY = objectobj[rows].address.city;
                    records.POSTALCODE = objectobj[rows].address.zipcode;
                    records.MOBILENUMBER = objectobj[rows].phone;
                    records.BS = objectobj[rows].company.bs;
                    col.push(records);
                }
                var table=document.createElement("table");
                table.setAttribute("id","myTable");
                var tablerow=table.insertRow(-1);
                let headerKeys = Object.keys(col[0])
                var tablehead = document.createElement("th");
                tablehead.innerHTML="DeleteRow";
                tablerow.appendChild(tablehead);
                headerKeys.forEach( element => {
                    var tablehead = document.createElement("th");
                    tablehead.innerHTML = element;
                    tablerow.appendChild(tablehead);
                })
                
                // iterating the records of object
                for (var a = 0; a < col.length; a++) { 
                    tablerow = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tablerow.appendChild(button);

                    
                     //Iterating cell data
                    
                    for (let eachKey in col[a]) {      
                        
                        var tablecell = tablerow.insertCell(-1);
                        tablecell.innerHTML = col[a][eachKey];
                    }
                }
                var divContainer = document.getElementById("demo");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (xhttp.status == 400) {
               alert('There was an error 400');
            }
        }
   document.getElementById("demo").innerHTML = this.responseText;
    
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}
function removeRow(oButton) 
{
    document.getElementById('myTable').deleteRow(oButton.parentNode.rowIndex);    
}
