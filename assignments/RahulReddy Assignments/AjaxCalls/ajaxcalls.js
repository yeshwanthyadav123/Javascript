function fetchData(){
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
                    records.NAME = objects[rows].name;
                    records.USERNAME = objects[rows].username;
                    records.CITY = objects[rows].address.city;
                    records.POSTALCODE = objects[rows].address.zipcode;
                    records.MOBILENUMBER = objects[rows].phone;
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
                
                // iterating the records of object
                for (var i = 0; i < columns.length; i++) { 
                    tablerow = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tablerow.appendChild(button);

                    
                     //Iterating cell data
                    
                    for (let eachKey in columns[i]) {      
                        
                        var tablecell = tablerow.insertCell(-1);
                        tablecell.innerHTML = columns[i][eachKey];
                    }

                }
                var divContainer = document.getElementById("paragraph");
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
function formvalues(e){       
                    var frecords = {};
                    frecords.id = document.getElementById("Id").value;
                    frecords.name = document.getElementById("name").value;
                    frecords.username = document.getElementById("username").value;
                    frecords.city = document.getElementById("city").value;
                    frecords.pcode = document.getElementById("pcode").value;
                    frecords.mnumber = document.getElementById("mnumber").value;
                    frecords.bs = document.getElementById("bs").value;
    var tb = document.getElementById("myTable");
    var trow = tb.insertRow();
var btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('value', 'Delete');
btn.setAttribute('id','deleteRow');
btn.setAttribute('onclick', 'removeRow(this);');
trow.appendChild(btn);
     //Iterating cell data
    for (let eachKey in frecords) {      
        var tcell = trow.insertCell(-1);
        tcell.innerHTML = frecords[eachKey];
    }
  var  container = document.getElementById("paragraph");
  container.append(tb);
  e.preventDefault();
}

function removeRow(oButton) 
{
    document.getElementById('myTable').deleteRow(oButton.parentNode.rowIndex);    
}
document.getElementById("show").onclick = function(){
    document.getElementById("sform").style.display="block";
}
document.getElementById("hide").onclick = function(){
    document.getElementById("sform").style.display="none";
}
