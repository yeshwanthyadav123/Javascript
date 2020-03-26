var users = [
            {Name : 'shashi',Age : 21,address:'hyderabad',pincode:'500097'},
    {Name : 'sai',Age : 11,address:'charminar',pincode:'505497'},
      {Name : 'vishali',Age : 31,address:'pune',pincode:'505467'},
{Name : 'bharat',Age : 51,address:'pune',pincode:'100007'},      
{Name : 'gokul',Age : 41,address:'nalgonda',pincode:'105-467'},
    {Name : 'vamshi',Age : 21,address:'hyderabad',pincode:'500097'},
    {Name : 'shiva',Age : 11,address:'charminar',pincode:'505497'},
      {Name : 'sairam',Age : 31,address:'pune',pincode:'505467'},
{Name : 'satya',Age : 51,address:'pune',pincode:'100007'},      
{Name : 'shiram',Age : 41,address:'nalgonda',pincode:'105-467'}
];
   

var tablerow = '<tr>';
    var tablebody = '';
 for (var i = 0; i < users.length; i++) {
        var uData = users[i];
        var rec = {}
 Object.keys(uData).sort().forEach((value, i) => {
 rec[value] = uData[value]  });
        
        var row = '<tr>'
        for (var key in rec) {
            
            if (i === 0) {
                tablerow += '<th>' + key + '</th>';
            }
            row += '<td>' + rec[key] + '</td>';
        }
        row += '</tr>'
        tablebody += row;
    }
    
    
    tablerow += '</tr>';
    tablebody += '</tr>';
    
    document.getElementById('head').innerHTML = tablerow;
    document.getElementById('body').innerHTML = tablebody;