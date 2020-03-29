function fetchData() {
    var x = new XMLHttpRequest();

    x.onreadystatechange = function() {
        if (x.readyState == XMLHttpRequest.DONE) {
            if (x.status == 200) {
                var data = x.response;
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
                var divContainer = document.getElementById("paragraph");
                divContainer.innerHTML = "";
                divContainer.appendChild(table);
            } else if (xhr.status == 400) {
                alert('There was an error 400');
            }
        }
    }
    x.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    x.send();
}

function AddRow() {
    var x = document.getElementById("addForm");
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function newDataObject(e) {
    var newObject = {};
    let table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) {
        var Row = table.rows[i];
        var CellValue = Row.cells[0].innerHTML;
    }

    newObject.id = parseInt(CellValue) + 1;
    newObject.name = document.getElementById('Name').value;
    newObject.username = document.getElementById('UserName').value;
    newObject.city = document.getElementById('City').value;
    newObject.zipcode = document.getElementById('ZCode').value;
    newObject.phone = document.getElementById('Phone').value;
    newObject.bs = document.getElementById('Bs').value;
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
    let divContainer = document.getElementById("paragraph");
    divContainer.appendChild(table);
    document.getElementById('Name').value = "";
    document.getElementById('Name').value = "";
    document.getElementById('City').value = "";
    document.getElementById('ZCode').value = "";
    document.getElementById('Phone').value = "";
    document.getElementById('Bs').value = "";
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

function nameValidation(e1) {
    var NameReturn = false;
    let NameEl = document.getElementById("Name");
    let info = document.getElementById("NameMessage");
    if (NameEl.value == null || NameEl.value == "") {
        info.innerHTML = "Name can\'t be empty";
        info.style.color = "blue";
    } else {
        info.innerHTML = "";
        NameReturn = true;
        return NameReturn;
    }
}

function UsernameValidation(e2) {
    var UsernameReturn = false;
    let UsernameEl = document.getElementById("UserName");
    if (UsernameEl.value == null || UsernameEl.value == "") {
        let info = document.getElementById("UserNameMessage");
        info.innerHTML = "UserName can\'t be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("UserNameMessage").innerHTML = "";
        UsernameReturn = true;
        return UsernameReturn;
    }
}

function CityValidation(e3) {
    var CityReturn = false;
    let CityEl = document.getElementById("City");
    if (CityEl.value == null || CityEl.value == "") {
        let info = document.getElementById("CityMessage");
        info.innerHTML = "City can\'t be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("CityMessage").innerHTML = "";
        CityReturn = true;
        return CityReturn;
    }
}

function ZCodeValidation(e4) {
    var ZCodeReturn = false;
    let ZCodeEl = document.getElementById("ZCode");
    if (ZCodeEl.value == null || ZCodeEl.value == "") {
        let info = document.getElementById("ZCodeMessage");
        info.innerHTML = "ZCode can\'t be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("ZCodeMessage").innerHTML = "";
        ZCodeReturn = true;
        return ZCodeReturn;
    }
}

function PhoneValidation(e5) {
    var PhoneReturn = false;
    let PhoneEl = document.getElementById("Phone");
    if (PhoneEl.value == null || PhoneEl.value == "") {
        let info = document.getElementById("PhoneMessage");
        info.innerHTML = "Phone Number can\'t be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("PhoneMessage").innerHTML = "";
        PhoneReturn = true;
        return PhoneReturn;
    }
}

function BsValidation() {
    var BsReturn = false;
    let BsEl = document.getElementById("Bs");
    if (BsEl.value == null || BsEl.value == "") {
        let info = document.getElementById("BsMessage");
        info.innerHTML = "Bs Number can\'t be empty";
        info.style.color = "blue";
    } else if (BsEl.value != null) {
        document.getElementById("BsMessage").innerHTML = "";
        BsReturn = true;
        return BsReturn;
    } else {
        BsReturn = false;
        return BsReturn;
    }
}

function Submitvalidate(event) {
    if ((nameValidation(event) || UsernameValidation(event) || CityValidation(event) || ZCodeValidation(event) || PhoneValidation(event) || BsValidation()) != true) {
        event.preventDefault();
    } else if ((nameValidation(event) && UsernameValidation(event) && CityValidation(event) && ZCodeValidation(event) && PhoneValidation(event) && BsValidation()) == true) {
        newDataObject(event);
    }
}