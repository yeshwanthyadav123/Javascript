function fetchData() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var data = xhr.response;
                var ParsedData = JSON.parse(data);
                getData(ParsedData);
            } else if (xhr.status == 400) {
                alert('There was an error 400');
            }
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
}

function getData(ParsedData){
  var col = [];
                for (var i = 0; i < ParsedData.length; i++) {
                    var record1 = {};
                    record1.id = ParsedData[i].id;
                    record1.name = ParsedData[i].name;
                    record1.username = ParsedData[i].username;
                    record1.city = ParsedData[i].address.city;
                    record1.zipcode = ParsedData[i].address.zipcode;
                    record1.phone = ParsedData[i].phone;
                    record1.bs = ParsedData[i].company.bs;
                    col.push(record1);
                }
                var SearchBox = document.createElement('input');
                SearchBox.setAttribute('type', 'text');
                SearchBox.setAttribute('id', 'searchInput');
                let SearchButton = document.createElement('input');
                SearchButton.setAttribute('type', 'button');
                SearchButton.setAttribute('value', 'Search');
                SearchButton.setAttribute('id', 'searchInputButton');
                SearchButton.setAttribute('class', 'search');
                SearchButton.setAttribute('onclick', 'SearchInput();');
                let searchEl = document.getElementById('search');
                searchEl.innerHTML = "";
                searchEl.appendChild(SearchBox);
                searchEl.appendChild(SearchButton);
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
                var divContainer = document.getElementById("para");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
}

function AddRow() {
    var x = document.getElementById("addForm");
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function inputDatafields(e) {
    var inputData = {};
    let table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) {
        var Row = table.rows[i];
        var CellValue = Row.cells[0].innerHTML;
    }

    inputData.id = parseInt(CellValue) + 1;
    inputData.name = document.getElementById('inputName').value;
    inputData.username = document.getElementById('inputUserName').value;
    inputData.city = document.getElementById('inputCity').value;
    inputData.zipcode = document.getElementById('inputZCode').value;
    inputData.phone = document.getElementById('inputPhone').value;
    inputData.bs = document.getElementById('inputBs').value;
    var tr = table.insertRow();
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Delete');
    button.setAttribute('id', 'deleteRow');
    button.setAttribute('onclick', 'removeRow(this);');
    tr.appendChild(button);
    for (let values in inputData) {
        var tableData = tr.insertCell(-1);
        tableData.innerHTML = inputData[values];
    }
    let divContainer = document.getElementById("para");
    divContainer.appendChild(table);
    document.getElementById('inputName').value = "";
    document.getElementById('inputUserName').value = "";
    document.getElementById('inputCity').value = "";
    document.getElementById('inputZCode').value = "";
    document.getElementById('inputPhone').value = "";
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

function validateName(e1) {
    var NameReturn = false;
    let NameEl = document.getElementById("inputName");
    let info = document.getElementById("NameMessage");
    if (NameEl.value == null || NameEl.value == "") {
        info.innerHTML = "Name cannot be empty";
        info.style.color = "red";
    } else {
        info.innerHTML = "";
        NameReturn = true;
        return NameReturn;
    }
}

function validateUserName(e2) {
    var UsernameReturn = false;
    let UsernameEl = document.getElementById("inputUserName");
    if (UsernameEl.value == null || UsernameEl.value == "") {
        let info = document.getElementById("UserNameMessage");
        info.innerHTML = "UserName cannot be empty";
        info.style.color = "red";
    } else {
        document.getElementById("UserNameMessage").innerHTML = "";
        UsernameReturn = true;
        return UsernameReturn;
    }
}

function validateCity(e3) {
    var CityReturn = false;
    let CityEl = document.getElementById("inputCity");
    if (CityEl.value == null || CityEl.value == "") {
        let info = document.getElementById("CityMessage");
        info.innerHTML = "City cannot be empty";
        info.style.color = "red";
    } else {
        document.getElementById("CityMessage").innerHTML = "";
        CityReturn = true;
        return CityReturn;
    }
}

function validateZipcode(e4) {
    var ZCodeReturn = false;
    let ZCodeEl = document.getElementById("inputZCode");
    if (ZCodeEl.value == null || ZCodeEl.value == "") {
        let info = document.getElementById("ZCodeMessage");
        info.innerHTML = "ZipCode cannot be empty";
        info.style.color = "red";
    } else {
        document.getElementById("ZCodeMessage").innerHTML = "";
        ZCodeReturn = true;
        return ZCodeReturn;
    }
}

function validatePhoneNumber(e5) {
    var PhoneReturn = false;
    let PhoneEl = document.getElementById("inputPhone");
    if (PhoneEl.value == null || PhoneEl.value == "") {
        let info = document.getElementById("PhoneMessage");
        info.innerHTML = "Phone Number cannot be empty";
        info.style.color = "red";
    } else {
        document.getElementById("PhoneMessage").innerHTML = "";
        PhoneReturn = true;
        return PhoneReturn;
    }
}

function BsValidation() {
    var BsReturn = false;
    let BsEl = document.getElementById("inputBs");
    if (BsEl.value == null || BsEl.value == "") {
        let info = document.getElementById("BsMessage");
        info.innerHTML = "Bs Number cannot be empty";
        info.style.color = "red";
    } else if (BsEl.value != null) {
        document.getElementById("BsMessage").innerHTML = "";
        BsReturn = true;
        return BsReturn;
    } else {
        BsReturn = false;
        return BsReturn;
    }
}

function validateOnSubmit(event) {
    if ((validateName(event) || validateUserName(event) || validateCity(event) || validateZipcode(event) || validatePhoneNumber(event) || BsValidation()) != true) {
        event.preventDefault();
    } else if ((validateName(event) && validateUserName(event) && validateCity(event) && validateZipcode(event) && validatePhoneNumber(event) && BsValidation()) == true) {
        inputDatafields(event);
    }
}
