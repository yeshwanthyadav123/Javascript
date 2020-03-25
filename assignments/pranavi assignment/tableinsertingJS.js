function addRow() {
          
    var myFName = document.getElementById("fname");
    var myLName = document.getElementById("lname");
    var mobile = document.getElementById("number");
    var email = document.getElementById("emailid");
    var branch = document.getElementById("branch");
    var age = document.getElementById("age");
    var year = document.getElementById("year");
    var salary = document.getElementById("salary");
    var days = document.getElementById("days");
    var leaves = document.getElementById("leaves");
    var holidays = document.getElementById("holidays");
    var addr = document.getElementById("address");
    var area = document.getElementById("area");
    var pin = document.getElementById("pinCode");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var role = document.getElementById("role");
    var rarea = document.getElementById("rarea");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
   
    row.insertCell(0).innerHTML= myFName.value;
    row.insertCell(1).innerHTML= myLName.value;
    row.insertCell(2).innerHTML= mobile.value;
    row.insertCell(3).innerHTML= email.value;
    row.insertCell(4).innerHTML= branch.value;
    row.insertCell(5).innerHTML= age.value;
    row.insertCell(6).innerHTML= year.value;
    row.insertCell(7).innerHTML= salary.value;
    row.insertCell(8).innerHTML= days.value;
    row.insertCell(9).innerHTML= leaves.value;
    row.insertCell(10).innerHTML= holidays.value;
    row.insertCell(11).innerHTML= addr.value;
    row.insertCell(12).innerHTML= area.value;
    row.insertCell(13).innerHTML= pin.value;
    row.insertCell(14).innerHTML= state.value;
    row.insertCell(15).innerHTML= country.value;
    row.insertCell(16).innerHTML= role.value;
    row.insertCell(17).innerHTML= rarea.value;
    row.insertCell(18).innerHTML= myLName.value;
    
 
 
 
}
 

 

 
function load() {
    
    console.log("Page load finished");
 
}