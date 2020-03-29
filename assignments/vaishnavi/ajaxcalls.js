<script>
	function fetchData(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) 
            {var col = [];
                var obj = JSON.parse(xhr.response);
                    for (var i = 0; i < obj.length; i++) {
                        var record = {};
                        record.id = obj[i].id;
                        record.name = obj[i].name;
                        record.username = obj[i].username;
                        record.city = obj[i].address.city;
                        record.zipcode = obj[i].address.zipcode;
                        record.phone = obj[i].phone;
                        record.bs = obj[i].company.bs;
                        col.push(record);
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
                for (var i = 0; i < col.length; i++) {
                    tr = table.insertRow(-1);
                var button = document.createElement('input');
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Delete');
                button.setAttribute('id','deleteRow');
                button.setAttribute('onclick', 'removeRow(this);');
                tr.appendChild(button);
            

                    for (let eachKey in col[i]) {       
                         var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = col[i][eachKey];
                    }
                }
                var divContainer = document.getElementById("Data");
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
function removeRow(OnButtonClick) 
{

document.getElementById('myTable').deleteRow(OnButtonClick.parentNode.rowIndex);    
}


function search() {
    
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
  var error=true;
    // Loop through all table rows, and hide those who don't match the search
    for (var i = 0; i < tr.length; i++) {
     var td = tr[i].getElementsByTagName("td")[1];
      if (td)
     {
        var textValue = td.textContent || td.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1)
        {
          tr[i].style.display = "";
         // printerror("No details are found with that Name");
        } 
        else {
            tr[i].style.display = "none";
          }
      }
    } 
}


function AddDetails(){
    var add = document.getElementById("form");
    if(add.style.display === 'none')
    {
        add.style.display="block";
    }
     else{
         add.style.display="none";
     }
}


function writeToPage(e1) 
{
    var name = document.getElementById("name").value;
    var uname = document.getElementById("uname").value;
    var city = document.getElementById("city").value;
    var zipcode = document.getElementById("zipcode").value;
    var phonenumber = document.getElementById("phoneNumber").value;
    var bs = document.getElementById("bs").value;

     if(name === ""){
        alert("Please fill out the Full Name field.");
    }
    else if(uname === ""){
        alert("Please fill out the Username field.");
    }
    else if(city === ""){
        alert("Please fill out city field.");
    }
    else if(zipcode=== ""){
        alert("Please fill out Zipcode field.");
    }
     else if(phonenumber=== ""){
        alert("Please fill out Phonenumber field.");
    }
    else if(bs=== ""){
        alert("Please fill out bs field.");
    }
    else{
    
      var newrecord ={};
        newrecord.id = document.getElementById("myTable").rows.length;
        //newrecord.id = document.getElementById("id").value;
        newrecord.name = document.getElementById("name").value;
        newrecord.uname =document.getElementById("uname").value;
        newrecord.city = document.getElementById("city").value;
        newrecord.phonenumber=document.getElementById("phoneNumber").value;
        newrecord.zipcode=document.getElementById("zipcode").value;
        newrecord.bs=document.getElementById("bs").value;
       
      var tab = document.getElementById("myTable");
      var tr= tab.insertRow();
      var button = document.createElement('input');
         button.setAttribute('type', 'button');
         button.setAttribute('value', 'Delete');
         button.setAttribute('id','deleteRow');
         button.setAttribute('onclick', 'removeRow(this);');
         tr.appendChild(button);
        

       for (let eachKey in newrecord) 
       {                     
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = newrecord[eachKey];

       }
        var divContainer = document.getElementById("Data");
        divContainer.appendChild(tab);
    }
    e1.preventDefault();
}
</script>