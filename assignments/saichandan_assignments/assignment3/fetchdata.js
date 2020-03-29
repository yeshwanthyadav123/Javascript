function fetchData() {
    var xmlhttp = new XMLHttpRequest();

    
    // xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
            var details = xmlhttp.response;
              var object = JSON.parse(details);

            var tabledata = [];
            for (var i = 0; i < object.length; i++) {
                    var item = {};
                    item.id = object[i].id;
                 item.name = object[i].name;
                item.username = object[i].username;
                    item.city = object[i].address.city;
                item.zipcode = object[i].address.zipcode;
                item.phone = object[i].phone;
                item.bs = object[i].company.bs;

                    tabledata.push(item);
                    //console.log(xmlhttp.responseText);
            }
               
                //creating table
            var table = document.createElement("table");
                table.setAttribute("id", "fetcheddata");
                var tr = table.insertRow(-1);
                
                
               let headerKeys = Object.keys(tabledata[0]);
               
                headerKeys.forEach(element => {
                    var th = document.createElement("th");
                    th.innerHTML = element;
                    tr.appendChild(th);
                })
                var th = document.createElement("th");
                 th.innerHTML = "Delete";
                 tr.appendChild(th);
                //displaying list
                for (var i = 0; i < tabledata.length; i++) { 
                    tr = table.insertRow(-1);
                    
                    for (let valuekey in tabledata[i]) {

                        var icell = tr.insertCell(-1);
                        icell.innerHTML = tabledata[i][valuekey];
                    }
                    var button = document.createElement('input');
                    button.setAttribute('type', 'button');
                    button.setAttribute('value', 'Delete');
                    button.setAttribute('onclick', 'removeSpecificRow(this);');
                    tr.appendChild(button);
                }
                 var search = document.createElement('input');
                search.setAttribute('type', 'text');
                search.setAttribute('id', 'searchInput');
                let SearchB = document.createElement('input');
                SearchB.setAttribute('type', 'button');
              SearchB.setAttribute('value','search here')
                SearchB.setAttribute('id', 'searchInputButton');
                SearchB.setAttribute('class', 'search');
                SearchB.setAttribute('onclick', 'SearchInput();');
                let searchElement = document.getElementById('search');
                searchElement.innerHTML = "";
                searchElement.appendChild(search);
                searchElement.appendChild(SearchB);
                let Add = document.createElement('input');
                Add.setAttribute('type', 'button');
                Add.setAttribute('value', 'AddRow');
                Add.setAttribute('id', 'AddRow');
                Add.setAttribute('onclick', 'AddRow();');
                let AddElement = document.getElementById('addButton');
                AddElement.innerHTML = "";
                AddElement.appendChild(Add);
                var tabled = document.getElementById("data");
                tabled.innerHTML = "";
                tabled.appendChild(table);
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

function newDataObject(e) {
    var newObj = {};
    let table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) {
        var Row = table.rows[i];
        var CellValue = Row.cells[0].innerHTML;
    }

    newObj.id = parseInt(CellValue) + 1;
    newObj.name = document.getElementById('Name').value;
    newObj.username = document.getElementById('UserName').value;
    newObj.city = document.getElementById('City').value;
    newObj.zipcode = document.getElementById('ZCode').value;
    newObj.phone = document.getElementById('Phone').value;
    newObj.bs = document.getElementById('Bs').value;
    var tr = table.insertRow();
    let button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Delete');
    button.setAttribute('id', 'deleteRow');
    button.setAttribute('onclick', 'removeRow(this);');
    tr.appendChild(button);
    for (let values in newObj) {
        var tableData = tr.insertCell(-1);
        tableData.innerHTML = newObj[values];
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

function nameValidation(a) {
    var NameReturn = false;
    let NameEl = document.getElementById("Name");
    let info = document.getElementById("NameMessage");
    if (NameEl.value == null || NameEl.value == "") {
        info.innerHTML = "Name cannot't be empty";
        info.style.color = "blue";
    } else {
        info.innerHTML = "";
        NameReturn = true;
        return NameReturn;
    }
}

function UsernameValidation(b) {
    var UsernameReturn = false;
    let UsernameEl = document.getElementById("UserName");
    if (UsernameEl.value == null || UsernameEl.value == "") {
        let info = document.getElementById("UserNameMessage");
        info.innerHTML = "UserName cannot be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("UserNameMessage").innerHTML = "";
        UsernameReturn = true;
        return UsernameReturn;
    }
}

function CityValidation(c) {
    var CityReturn = false;
    let CityEl = document.getElementById("City");
    if (CityEl.value == null || CityEl.value == "") {
        let info = document.getElementById("CityMessage");
        info.innerHTML = "City cannot be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("CityMessage").innerHTML = "";
        CityReturn = true;
        return CityReturn;
    }
}

function ZCodeValidation(d) {
    var ZCodeReturn = false;
    let ZCodeEl = document.getElementById("ZCode");
    if (ZCodeEl.value == null || ZCodeEl.value == "") {
        let info = document.getElementById("ZCodeMessage");
        info.innerHTML = "ZCode cannot be empty";
        info.style.color = "blue";
    } else {
        document.getElementById("ZCodeMessage").innerHTML = "";
        ZCodeReturn = true;
        return ZCodeReturn;
    }
}

function PhoneValidation(5) {
    var PhoneReturn = false;
    let PhoneEl = document.getElementById("Phone");
    if (PhoneEl.value == null || PhoneEl.value == "") {
        let info = document.getElementById("PhoneMessage");
        info.innerHTML = "Phone Number cannott be empty";
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
//delete function
function removeSpecificRow(deletebutton) {
    document.getElementById('fetcheddata').deleteRow(deletebutton.parentNode.rowIndex);
}

function restrictAlphabets(e){
				var x=e.which||e.keycode;
				if((x>=48 && x<=57) || x==8 ||
					(x>=35 && x<=40)|| x==46)
					return true;
				else
					return false;
			}