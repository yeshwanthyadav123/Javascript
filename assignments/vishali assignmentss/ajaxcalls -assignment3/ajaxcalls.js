function loadDetails()
{
    var xmlhttp=new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() 
	{
        if (xmlhttp.readyState == XMLHttpRequest.DONE)
			{
            if (xmlhttp.status == 200) 
            {
                var data=xmlhttp.response;
                var rawdata=JSON.parse(data);
                var obj = rawdata;
                var columns = [];
                for (var rows = 0; rows < obj.length; rows++)
					{
                    var record = {};
                    record.Id = obj[rows].id;
                    record.Name = obj[rows].name;
                    record.UserName = obj[rows].username;
                    record.City = obj[rows].address.city;
                    record.PostalCode = obj[rows].address.zipcode;
                    record.MobileNumber = obj[rows].phone;
                    record.Bs= obj[rows].company.bs;
                    columns.push(record);
                }
               
                var table=document.createElement("table");
                table.setAttribute("id","tableData");
                var tablerow=table.insertRow(-1);
                let headerKeys = Object.keys(columns[0])
                var tablehead = document.createElement("th");
                tablehead.innerHTML="DeleteAction";
                tablerow.appendChild(tablehead);
                headerKeys.forEach( element => {
                    var tablehead = document.createElement("th");
                    tablehead.innerHTML = element;
                    tablerow.appendChild(tablehead);
                }
                ) 
                
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
						{      
                        
                        var tablecell = tablerow.insertCell(-1);
                        tablecell.innerHTML = columns[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("paragraph");
                divContainer.innerHTML = "  ";
                divContainer.appendChild(table); 
            }
            else if (xmlhttp.status == 400) {
               alert('An Error Of 400 Occured');
            }
        }
    }
    xmlhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xmlhttp.send();
}
function removeRow(objButton) 
{
    document.getElementById('tableData').deleteRow(objButton.parentNode.rowIndex);    
}