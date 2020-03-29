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
                for (var i = 0; i < objects.length; i++) {
                    var records = {};
                    records.Id = objects[i].id;
                    records.NAME = objects[i].name;
                    records.USERNAME = objects[i].username;
                    records.CITY = objects[i].address.city;
                    records.POSTALCODE = objects[i].address.zipcode;
                    records.MOBILENUMBER = objects[i].phone;
                    records.BS = objects[i].company.bs;
                    columns.push(records);
                }
                var table=document.createElement("table");     //<table>
                table.setAttribute("id","myTable");              //id="myTable"
                var tablerow=table.insertRow(-1);                //<tr> 
                let headerKeys = Object.keys(columns[0])          //<th>   
                var tablehead = document.createElement("th");      
                tablehead.innerHTML="DeleteRow";                       
                tablerow.appendChild(tablehead);                  //</tr>
                headerKeys.forEach( element => {
                    var tablehead = document.createElement("th");
                    tablehead.innerHTML = element;
                    tablerow.appendChild(tablehead);
                })
                
                for (var i = 0; i < columns.length; i++) { 
                    tablerow = table.insertRow(-1);                //<tr>
                var button = document.createElement('input');           //<input type=" button" value="delete" 
                button.setAttribute('type', 'button');                
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tablerow.appendChild(button);                            //</tr>

                    
                    for (let eachKey in columns[i]) {                   
                        var tablecell = tablerow.insertCell(-1);      //
                        tablecell.innerHTML = columns[i][eachKey];
                    }
					
                }
                var divContainer = document.getElementById("result");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);                           //</table>
            }
            else if (xmlhttp.status == 400) {
               alert('There was an error 400');
            }
        }
    }
    xmlhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xmlhttp.send();
}
function removeRow(oButton) 
{
    document.getElementById('myTable').deleteRow(oButton.parentNode.rowIndex);    
}

function search() {
    let inputData = document.getElementById('searchInput').value;
    if (inputData) {
        inputData = inputData.toLowerCase();
        var rows = document.getElementsByTagName("tr");
        for (let i = 1; i < rows.length; i++) {
            var td = rows[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toLowerCase().indexOf(inputData) > -1) {
                    found = true;
                }
            }
            if (found) {
                rows[i].style.display = "";
                found = false;
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function AddDetails(){
    var add = document.getElementById("form");
    if(add.style.display === 'none')
    {
        add.style.display="block";
    }
     else{
         add.style.display="none";
     }
}


function writeToPage(e1) 
{
    var name = document.getElementById("name").value;
    var uname = document.getElementById("uname").value;
    var city = document.getElementById("city").value;
    var zipcode = document.getElementById("zipcode").value;
    var phonenumber = document.getElementById("phoneNumber").value;
    var bs = document.getElementById("bs").value;

     if(name === ""){
        alert("Please fill out the Full Name field.");
    }
    else if(uname === ""){
        alert("Please fill out the Username field.");
    }
    else if(city === ""){
        alert("Please fill out city field.");
    }
    else if(zipcode=== ""){
        alert("Please fill out Zipcode field.");
    }
     else if(phonenumber=== ""){
        alert("Please fill out Phonenumber field.");
    }
    else if(bs=== ""){
        alert("Please fill out bs field.");
    }
    else{
    
      var newrecord ={};
        newrecord.id = document.getElementById("myTable").rows.length;
        //newrecord.id = document.getElementById("id").value;
        newrecord.name = document.getElementById("name").value;
        newrecord.uname =document.getElementById("uname").value;
        newrecord.city = document.getElementById("city").value;
        newrecord.phonenumber=document.getElementById("phoneNumber").value;
        newrecord.zipcode=document.getElementById("zipcode").value;
        newrecord.bs=document.getElementById("bs").value;
       
      var tab = document.getElementById("myTable");
      var tr= tab.insertRow();
      var button = document.createElement('input');
         button.setAttribute('type', 'button');
         button.setAttribute('value', 'Delete');
         button.setAttribute('id','deleteRow');
         button.setAttribute('onclick', 'removeRow(this);');
         tr.appendChild(button);
        

       for (let eachKey in newrecord) 
       {                     
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = newrecord[eachKey];

       }
        var divContainer = document.getElementById("Data");
        divContainer.appendChild(tab);
    }
    e1.preventDefault();
}











