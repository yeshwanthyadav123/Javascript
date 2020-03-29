  
function load(){
    var xmlhttp=new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) 
            {
                var data=xmlhttp.response;
                var rawdata=JSON.parse(data);
                var obj = rawdata;
                var columns = [];
                for (var rows = 0; rows < obj.length; rows++) {
                    var record = {};
                    record.Id = obj[rows].id;
                    record.Name = obj[rows].name;
                    record.UserName = obj[rows].username;
                    record.City = obj[rows].address.city;
                    record.PostalCode = obj[rows].address.zipcode;
                    record.PhoneNumber = obj[rows].phone;
                    record.BS= obj[rows].company.bs;
                    columns.push(record);
                }
                var searchBox = document.createElement('input');
                searchBox.setAttribute('type', 'text');
                searchBox.setAttribute('id', 'searchData');
                var searchButton = document.createElement('input');
                searchButton.setAttribute('type', 'button');
                searchButton.setAttribute('value', 'Search');
                searchButton.setAttribute('id', 'searchDataButton');
                searchButton.setAttribute('class', 'search');
                searchButton.setAttribute('onclick', 'SearchData();');
                var search1 = document.getElementById('search');
                search1.innerHTML = "";
                search1.appendChild(searchBox);
                search1.appendChild(searchButton);
                var table=document.createElement("table");
                table.setAttribute("id","tableData");
                var tablerow=table.insertRow(-1);
                var headerKeys = Object.keys(columns[0]);
                var tablehead = document.createElement("th");
                tablehead.innerHTML="DeleteAction";
                tablerow.appendChild(tablehead);
                headerKeys.forEach( element => {
                    var tablehead = document.createElement("th");
                    tablehead.innerHTML = element;
                    tablerow.appendChild(tablehead);
                }
                ) 
                
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
                var AddButton = document.createElement('input');
                AddButton.setAttribute('type', 'button');
                AddButton.setAttribute('value', 'AddNewRecord');
                AddButton.setAttribute('id', 'addRows');
                AddButton.setAttribute('onclick', 'addRow();');
                var AddEl = document.getElementById('addNewRow');
                AddEl.innerHTML = "";
                AddEl.appendChild(AddButton);
                var divContainer = document.getElementById("paragraph");
                divContainer.innerHTML = "";
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
function addRow() {
    var a = document.getElementById("addForm");
    if (a.style.display === 'none') {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
}

function newData(event1) {
    var newObject = {};
    var table = document.getElementById("tableData");
    for (var i = 1; i < table.rows.length; i++) {
        var Row = table.rows[i];
        var CellValue = Row.cells[0].innerHTML;
    }

    newObject.Id = parseInt(CellValue) + 1;
    newObject.Name = document.getElementById('name').value;
    newObject.UserName = document.getElementById('uname').value;
    newObject.City = document.getElementById('city').value;
    newObject.PostalCode = document.getElementById('postalCode').value;
    newObject.PhoneNumber = document.getElementById('phone').value;
    newObject.BS = document.getElementById('bs').value;
    var tablerow = table.insertRow();
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Delete');
    button.setAttribute('id', 'deleteRow');
    button.setAttribute('onclick', 'removeRow(this);');
    tablerow.appendChild(button);
    for (let values in newObject) {
        var tableData = tablerow.insertCell(-1);
        tableData.innerHTML = newObject[values];
    }
    var divContainer = document.getElementById("paragraph");
    divContainer.appendChild(table);
    document.getElementById('name').value = "";
    document.getElementById('uname').value = "";
    document.getElementById('city').value = "";
    document.getElementById('postalCode').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('bs').value = "";
    addRow();
    event1.preventDefault();
}

function removeRow(OnButtonClick) {
    document.getElementById('tableData').deleteRow(OnButtonClick.parentNode.rowIndex);
}

function SearchData() {
    var inputData = document.getElementById('searchData').value;
    if (inputData) {
        inputData = inputData.toLowerCase();
        var rows = document.getElementsByTagName("tr");
        for (var i = 1; i < rows.length; i++) {
            var td = rows[i].getElementsByTagName("td");
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toLowerCase().indexOf(inputData) > -1) {
                     var found = true;
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
function printError(elementId, Message) {
    document.getElementById(elementId).innerHTML = Message;
}

function nameValidation() {
    var name = false;
    var name1 = document.getElementById("name");
    if (name1.value == null || name1.value == "") {
       printError("nameError","Name Should Not Be Null!")
     
    } else {
        
        printError("nameError"," ");
        name = true;
        return name;
    }
}

function userNameValidation() {
    var uname = false;
    var uname1 = document.getElementById("uname");
    if (uname1.value == null || uname1.value == "") {
       printError("userNameError","UserName Should Not Be Null!")
     
    } else {
        
        printError("userNameError"," ");
        uname = true;
        return uname;
    }
}

function cityValidation() {
    var city = false;
    var city1 = document.getElementById("city");
    if (city1.value == null || city1.value == "") {
       printError("cityError","City Should Not Be Null!")
     
    } else {
        
        printError("cityError"," ");
        city = true;
        return city;
    }
}

function postalValidation() {
    var postal = false;
    var postal1 = document.getElementById("postalCode");
    if (postal1.value == null || postal1.value == "") {
       printError("postalError","PostalCode Should Not Be Null!")
     
    } else {
        
        printError("postalError"," ");
        postal = true;
        return postal;
    }
}

function phoneValidation() {
    var phone = false;
    var phone1 = document.getElementById("phone");
    if (phone1.value == null || phone1.value == "") {
       printError("phoneError","PhoneNumber Should Not Be Null!")
     
    } else {
        
        printError("phoneError"," ");
        phone = true;
        return phone;
    }
}

function bsValidation() {
    var bs = false;
    var bs1 = document.getElementById("bs");
    if (bs1.value == null || bs1.value == "") {
       printError("bsError","BS Should Not Be Null!")
     
    } else {
        
        printError("bsError"," ");
        bs = true;
        return bs;
    }
}

function submitValidation(event) {
    if ((nameValidation() || userNameValidation() || cityValidation() || postalValidation() || phoneValidation() || bsValidation()) != true) {
        event.preventDefault();
        
    } else if ((nameValidation() && userNameValidation() && cityValidation() && postalValidation() && phoneValidation() && bsValidation()) == true) {
        newData(event);
    }
}
