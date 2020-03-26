function getData(){
    var xmlhttp=new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) 
            {
                var data=xmlhttp.response;
                var rawObj=JSON.parse(data);
                var obj = rawObj
                var col = [];
                for (var i = 0; i < obj.length; i++) {
                    var record = {};
                  record.id = obj[i].id;
                  record.name = obj[i].name;
                  record.username = obj[i].username;
                  record.city = obj[i].address.city;
                  record.zipcode = obj[i].address.zipcode;
                  record.phone = obj[i].phone;
                  record.bs = obj[i].company.bs;
                   
                    col.push(record);
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
                for (var i = 0; i < col.length; i++) { 
                    tr = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tr.appendChild(button);

                    for (let eachKey in col[i]) {       
                        var tablecell = tr.insertCell(-1);
                        tablecell.innerHTML = col[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("table");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (xmlhttp.status == 400) {
               alert('There is an error 400');
            }
        }
    }
    xmlhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xmlhttp.send();
}
function removeRow(Button) 
{
    document.getElementById('myTable').deleteRow(Button.parentNode.rowIndex);    
}