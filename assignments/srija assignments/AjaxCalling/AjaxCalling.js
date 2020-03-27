function fetchData()
{
var xml=new XMLHttpRequest();
xml.onreadystatechange = function() {
    if (xml.readyState == XMLHttpRequest.DONE)
     {
        if (xml.status == 200) 
        {
            var data=xml.response;
            var rawdata=JSON.parse(data);
            var obj = rawdata;
            var columns = [];
            for (var row = 0; row < obj.length; row++)
            {
                var records = {};
                records.id = obj[row].id;
                records.name = obj[row].name;
                records.username = obj[row].username;
                records.city = obj[row].address.city;
                records.zipcode = obj[row].address.zipcode;
                records.phone = obj[row].phone;
                records.bs = obj[row].company.bs;
                columns.push(records);
            }
                var table=document.createElement("table");
                table.setAttribute("id","myTable");
                var tablerow=table.insertRow(-1);
                let headerKeys = Object.keys(columns[0])
                var tablehead = document.createElement("th");
                tablehead.innerHTML="Delete";
                tablerow.appendChild(tablehead);
                headerKeys.forEach( element => {
                var tablehead = document.createElement("th");
                tablehead.innerHTML = element;
                tablerow.appendChild(tablehead);
               })
                for (var i = 0; i < columns.length; i++)
            { 
                tablerow = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tablerow.appendChild(button);

                for (let eachKey in columns[i])
                 {       //Iterating Each CellData
                        
                        var tabCell = tablerow.insertCell(-1);
                        tabCell.innerHTML = columns[i][eachKey];
                }
            }
                var divContainer = document.getElementById("data");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (xml.status == 400) {
               alert('There was an error 400');
            }
        }
    }
    xml.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xml.send();
}
function removeRow(Button) 
{
    document.getElementById('myTable').deleteRow(Button.parentNode.rowIndex);    
}