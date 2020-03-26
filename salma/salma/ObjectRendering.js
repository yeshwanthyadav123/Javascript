   var ObjData = 
        {
            FirstName: 'Salma',
            LastName:  'Shaik',
            MobileNumber: 9985376052,
            EmailId:'shaik@gmail.com',
            Sex:'Female',
            Branch:'ECE',
            Age:25,
            College:'Rajeev Gandhi Memorial college of Engineering',
            Percentage:73,
            TotalBacklogs:0,
            ActiveBacklogs:0,
            Address:'Kurnool',
            District:'Kurnool',
            PinCode:50008,
            State:'Andhra',
            Country:'India',
            Hobbies:'Music',

        };
        var x = '<body>';
        var y = '<body>';
        var keys = Object.keys(ObjData);
        sortedkeys=keys.sort();
        for(var i in keys){
          y+='<th>'+ keys[i] + '</th>';
            y += '</body>';
        }
        document.getElementById("header").innerHTML = y;
        sortedkeys.forEach(prop =>{
            
            x+='<td>'+ ObjData[prop] + '</td>';
             x += '</body>';
           
        })
document.getElementById("records").innerHTML=x
