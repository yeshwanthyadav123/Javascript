var users = [
            {Name : 'Murari',Age : 21,address:'hyderabad',pincode:'500004'},
    {Name : 'Bandi',Age : 10,address:'hyderabad',pincode:'505597'},
      {Name : 'Vaishu',Age : 31,address:'pune',pincode:'505467'},
{Name : 'Vish',Age : 41,address:'ameerpet',pincode:'156507'},      
{Name : 'Shashi',Age : 100,address:'rtcx',pincode:'101167'}
];
   

var t = '<tr>';
    var tb = '';
 for (var i = 0; i < users.length; i++) {
        var uList = users[i];
        var rec = {}
 Object.keys(uList).sort().forEach((value, i) => {rec[value] = uList[value]  });
        
        var row = '<tr>'
        for (var key in rec) {
            
            if (i === 0) {
                t += '<th>' + key + '</th>';
            }
            row += '<td>' + rec[key] + '</td>';
        }
        row += '</tr>'
        tb += row;
    }
    
    
    t += '</tr>';
    tb += '</tr>';
    
    document.getElementById('head').innerHTML = t;
    document.getElementById('body').innerHTML = tb