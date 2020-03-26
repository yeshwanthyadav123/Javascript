function fetchData(){
    var xhr=new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) 
            {
                var data=xhr.response;
                var rawObj=JSON.parse(data);
                var obj = rawObj
                var col = [];
                for (var i = 0; i < obj.length; i++) {
                    var rec = {};
                    rec.id = obj[i].id;
                    rec.name = obj[i].name;
                    rec.username = obj[i].username;
                    rec.city = obj[i].address.city;
                    rec.zipcode = obj[i].address.zipcode;
                    rec.phone = obj[i].phone;
                    rec.bs = obj[i].company.bs;
                    // for (var key in rec) {
                    //     if (col.indexOf(key) === -1) {
                    //         col.push(key);
                    //     }
                    // }
                    col.push(rec);
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
                        
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = col[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("para");
                divContainer.innerHTML = "";
                divContainer.appendChild(table); 
            }
            else if (xhr.status == 400) {
               alert('There was an error 400');
            }
        }
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhr.send();
}
function removeRow(oButton) 
{
    document.getElementById('myTable').deleteRow(oButton.parentNode.rowIndex);    
}