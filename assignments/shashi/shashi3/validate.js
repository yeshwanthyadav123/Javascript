
    refresh();
    var id2;
    function refresh(){
    fetch("https://jsonplaceholder.typicode.com/users").then(
        result=>{result.json().then(
                data=>{
                    console.log(data);
                    //var x = document.getElementById("myBtn");
                    if(data.length>0){
                        var Bodytag="";
                        data.forEach((datavar)=>{
                            Bodytag+="<tr>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.id+"</td>";      
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.name+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.username+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.address.city+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.address.zipcode+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.phone+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td>"+datavar.company.bs+"</td>";
                            Bodytag+="<td>"+" "+"</td>";
                            Bodytag+="<td onclick='del()'>"+"delete"+"</td>";
                        })
                        document.getElementById("data").innerHTML=Bodytag;
                    }
                }
            )})
  
    }                            
                            function del(){
                                //var id1=document.getElementById("id1");
                            document.getElementById("data").deleteRow(0);
                            }
