    //we can ask size and add for loop for taking values from user if needed
var names=
 {
   
    name1:"chandu",  
  name2:"shashi", 
  name3:"bharath", 
  name4:"rajesh",  
  name5:'yamuna',
  name6:'saimuna',
    name7:'vikram',
    name8:'sasi',
    name9:'sailesh',
    name10:'suresh',
    name11:'mahesh',
 };
   var ages={
            age1:32,
            age2:17,
            age3:58,
            age4:62,
            age5:12,
            age6:12,
            age7:12,
            age8:12,
            age9:12,
            age10:12,
            age11:12
    
   };
     var DOBS={
        DOB1:"March 12, 2014", DOB2:"June 2, 2023", DOB3:"December 20, 2036",DOB4:"April 30, 2020",DOB5:"April 30, 2020",DOB6:"April 30, 2020",DOB7:"April 30, 2020",DOB8:"April 30, 2020",DOB9:"April 30, 2020",DOB10:"April 30, 2020",DOB11:"April 30, 2020",
    };
    var a='<body>';
    a+='<tr>';
                        a+='<th>'+"NAME"+'</th>';
                         a+='<th>'+"AGE"+'</th>';
                         a+='<th>'+"DOB"+'</th>';
   a+='</tr>';
     a+='<tr>';
    document.getElementById("tableData1").innerHTML=a;
    a+='</body>';
        var b='<body>';
    
        Object.keys(names).forEach(prop =>{
                        b+='<tr>';
                        b+= '<td>' + names[prop]+'</td>';
                        b+= '</tr>';   
     
  }) 
    b+='</body>';
    var c='<body>';
      document.getElementById("tableData").innerHTML=b;
       Object.keys(ages).forEach(prop =>{
            
                        c+='<tr>';
                        c+= '<td>' + ages[prop]+'</td>';
                        c+= '</tr>';   
             
     
  })  
        c+='</body>';
    document.getElementById("tableData2").innerHTML=c;
    var d='<body>';
     Object.keys(DOBS).forEach(prop =>{
            
                        d+='<tr>';
                        d+= '<td>' + DOBS[prop]+'</td>';
                        d+= '</tr>';  
     
  }) 
    d+='</body>';
    document.getElementById("tableData3").innerHTML=d;
   