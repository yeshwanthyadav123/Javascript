
    var ObjData = 
        {
            FirstName: 'Sathvika',
            LastName:  'Reddy',
            MobileNumber: 9849711412,
            EmailId:'b@gmail.com',
            Sex:'Female',
            Branch:'CSE',
            Age:20,
            yearofJoining:2017,
            yearofPassing:2020,
            College:'Chaitanya Institute of Technology And  Science',
            Percentage:86,
            TotalBacklogs:0,
            ActiveBacklogs:0,
            Address:'Hanamkonda',
            District:'Warangal',
            PinCode:123456,
            State:'Telangana',
            Country:'India',
            Hobbies:'Reading Books',
            SportsData:'Kabbadi and '

        };
        var table = '<body>';
        var data = '<body>';
        var keys = Object.keys(ObjData);
        sortedkeys=keys.sort();
        for(var i in keys){
          data+='<th>'+ keys[i] + '</th>';
            data += '</body>';
        }
        document.getElementById("headerData").innerHTML = data;
        sortedkeys.forEach(prop =>{
            
            table +='<td>'+ ObjData[prop] + '</td>';
            table += '</body>';
           
        })
         document.getElementById("dataInTable").innerHTML=table;
