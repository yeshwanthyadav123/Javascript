var users = [
            {Name : 'Bharath',Age : 21,address:'hyderabad',pincode:'500097'},
    {Name : 'gokul',Age : 11,address:'hyderabad',pincode:'505497'},
      {Name : 'vyshnavi',Age : 31,address:'pune',pincode:'505467'},
{Name : 'shashi',Age : 51,address:'Eygpt',pincode:'100007'},      
{Name : 'viva',Age : 41,address:'canada',pincode:'105-467'}
];
   

var t = '<tr>';
    var tb = '';
    
    for (var i = 0; i < users.length; i++) {
        var uData = users[i];
        var rec = {}
        
        Object.keys(uData).sort().forEach((value, i) => {
            rec[value] = uData[value] 
        });
        
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
    document.getElementById('body').innerHTML = tb;