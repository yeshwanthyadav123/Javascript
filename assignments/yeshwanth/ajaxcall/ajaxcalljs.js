function getdata() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var data = xmlhttp.response;
                var obj = JSON.parse(data);
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
                    col.push(object);
                }
                var SearchBox = document.createElement('input');
                SearchBox.setAttribute('type', 'text');
                SearchBox.setAttribute('id', 'searchInput');
                let SearchBoxButton = document.createElement('input');
                SearchBoxButton.setAttribute('type', 'button');
                SearchBoxButton.setAttribute('value', 'Search');
                SearchBoxButton.setAttribute('id', 'searchInputButton');
                SearchBoxButton.setAttribute('class', 'search');
                SearchBoxButton.setAttribute('onclick', 'SearchInput();');
                let searchElement = document.getElementById('search');
                searchElement.innerHTML = "";
                searchElement.appendChild(SearchBox);
                searchElement.appendChild(SearchBoxButton);
                let table = document.createElement("table");
                table.setAttribute("id", "myTable");
                var tr = table.insertRow(-1);
                var th = document.createElement("th");
                th.innerHTML = "Delete";
                tr.appendChild(th);
                let headerKeys = Object.keys(col[0]);
                headerKeys.forEach(element => {
                    let th = document.createElement("th");
                    th.innerHTML = element;
                    tr.appendChild(th);
                })
                for (let i = 0; i < col.length; i++) {
                    tr = table.insertRow(-1);
                    let button = document.createElement('input');
                    button.setAttribute('type', 'button');
                    button.setAttribute('value', 'Delete');
                    button.setAttribute('id', 'deleteRow');
                    button.setAttribute('onclick', 'removeRow(this);');
                    tr.appendChild(button);
                    for (let values in col[i]) {
                        let tableData = tr.insertCell(-1);
                        tableData.innerHTML = col[i][values];
                    }
                }
                let AddButton = document.createElement('input');
                AddButton.setAttribute('type', 'button');
                AddButton.setAttribute('value', 'AddRow');
                AddButton.setAttribute('id', 'AddRow');
                AddButton.setAttribute('onclick', 'AddRow();');
                let AddEl = document.getElementById('addButton');
                AddEl.innerHTML = "";
                AddEl.appendChild(AddButton);
                var divContainer = document.getElementById("form");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
        }
    }
    xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xmlhttp.send();
}

function AddRow() {
    var x = document.getElementById("addForm");
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function DataObject(e) {
    var newObject = {};
    let table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) {
        var Row = table.rows[i];
        var CellValue = Row.cells[0].innerHTML;
    }

    newObject.id = parseInt(CellValue) + 1;
    newObject.name = document.getElementById('name').value;
    newObject.username = document.getElementById('username').value;
    newObject.city = document.getElementById('city').value;
    newObject.zipcode = document.getElementById('zipcode').value;
    newObject.phone = document.getElementById('mobile').value;
    newObject.bs = document.getElementById('inputBs').value;
    var tr = table.insertRow();
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Delete');
    button.setAttribute('id', 'deleteRow');
    button.setAttribute('onclick', 'removeRow(this);');
    tr.appendChild(button);
    for (let values in newObject) {
        var tableData = tr.insertCell(-1);
        tableData.innerHTML = newObject[values];
    }
    let divContainer = document.getElementById("form");
    divContainer.appendChild(table);
    document.getElementById('name').value = "";
    document.getElementById('username').value = "";
    document.getElementById('city').value = "";
    document.getElementById('zipcode').value = "";
    document.getElementById('mobile').value = "";
    document.getElementById('inputBs').value = "";
    AddRow();
    e.preventDefault();
}

function removeRow(OnButtonClick) {
    document.getElementById('myTable').deleteRow(OnButtonClick.parentNode.rowIndex);
}

function SearchInput() {
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

function name(e1) {
    var Namereturn = false;
    let NameElement = document.getElementById("name");
    let info = document.getElementById("NameError");
    if (NameElement.value == null || NameElement.value == "") {
        info.innerHTML = "name cannot be empty";
        info.style.color = "red";
    } else {
        info.innerHTML = "";
        Namereturn = true;
        return Namereturn;
    }
}

function username(e2) {
    var Usernamereturn = false;
    let UsernameElement = document.getElementById("username");
    if (UsernameElement.value == null || UsernameElement.value == "") {
        let info = document.getElementById("UsernameError");
        info.innerHTML = "username cant be empty";
        info.style.color = "red";
    } else {
        document.getElementById("UsernameError").innerHTML = "";
        Usernamereturn = true;
        return Usernamereturn;
    }
}

function city(e3) {
    var Cityreturn = false;
    let CityElement = document.getElementById("city");
    if (CityElement.value == null || CityElement.value == "") {
        let info = document.getElementById("CityError");
        info.innerHTML = "City cant be empty";
        info.style.color = "red";
    } else {
        document.getElementById("CityError").innerHTML = "";
        Cityreturn = true;
        return Cityreturn;
    }
}

function zipcode(e4) {
    var ZipCodereturn = false;
    let ZipCodeElement = document.getElementById("zipcode");
    if (ZipCodeElement.value == null || ZipCodeElement.value == "") {
        let info = document.getElementById("ZipcodeError");
        info.innerHTML = "Zipcode cannot be empty";
        info.style.color = "red";
    } else {
        document.getElementById("ZipcodeError").innerHTML = "";
        ZipCodereturn = true;
        return ZipCodereturn;
    }
}

function mobile(e5) {
    var Phonereturn = false;
    let PhoneElement = document.getElementById("mobile");
    if (PhoneElement.value == null || PhoneElement.value == "") {
        let info = document.getElementById("PhoneError");
        info.innerHTML = "phone number cant be empty";
        info.style.color = "red";
    } else {
        document.getElementById("PhoneError").innerHTML = "";
        Phonereturn = true;
        return Phonereturn;
    }
}

function BsValidation() {
    var Bsreturn = false;
    let BsEl = document.getElementById("inputBs");
    if (BsEl.value == null || BsEl.value == "") {
        let info = document.getElementById("BsMessage");
        info.innerHTML = "Bs cant be empty";
        info.style.color = "red";
    } else if (BsEl.value != null) {
        document.getElementById("BsMessage").innerHTML = "";
        Bsreturn = true;
        return Bsreturn;
    } else {
        Bsreturn = false;
        return Bsreturn;
    }
}

function Submitvalidate(event) {
    if ((name(event) || username(event) || city(event) || zipcode(event) || mobile(event) || BsValidation()) != true) {
        event.preventDefault();
    } else if ((name(event) && username(event) && city(event) && zipcode(event) && mobile(event) && BsValidation()) == true) {
        DataObject(event);
    }
}