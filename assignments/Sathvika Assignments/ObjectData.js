
    function addRow() {
              
        var myFName = document.getElementById("fname");
        var myLName = document.getElementById("lname");
        var mobile = document.getElementById("mnumber");
        var email = document.getElementById("emailid");
        var branch = document.getElementById("branch");
        var age = document.getElementById("age");
        var year = document.getElementById("year");
        var marks = document.getElementById("marks");
        var percentage = document.getElementById("percentage");
        var booksTaken = document.getElementById("books");
        var total = document.getElementById("tBacklogs");
        var active = document.getElementById("aBacklogs");
        var addr = document.getElementById("address");
        var dist = document.getElementById("district");
        var pin = document.getElementById("pinCode");
        var state = document.getElementById("state");
        var country = document.getElementById("country");
        var hobbies = document.getElementById("hobbie");
        var sports = document.getElementById("sData");
        var table = document.getElementById("tableData");
     
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
     
       
        row.insertCell(0).innerHTML= myFName.value;
        row.insertCell(1).innerHTML= myLName.value;
        row.insertCell(2).innerHTML= mobile.value;
        row.insertCell(3).innerHTML= email.value;
        row.insertCell(4).innerHTML= branch.value;
        row.insertCell(5).innerHTML= age.value;
        row.insertCell(6).innerHTML= year.value;
        row.insertCell(7).innerHTML= marks.value;
        row.insertCell(8).innerHTML= percentage.value;
        row.insertCell(9).innerHTML= myLName.value;
        row.insertCell(10).innerHTML= total.value;
        row.insertCell(11).innerHTML= active.value;
        row.insertCell(12).innerHTML= addr.value;
        row.insertCell(13).innerHTML= dist.value;
        row.insertCell(14).innerHTML= pin.value;
        row.insertCell(15).innerHTML= state.value;
        row.insertCell(16).innerHTML= country.value;
        row.insertCell(17).innerHTML= hobbies.value;
        row.insertCell(18).innerHTML= sports.value;
       
        
     
     
     
    }
     
    
    