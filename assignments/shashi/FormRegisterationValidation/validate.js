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
    var bodytag='<body>';
    bodytag+='<tr>';
                        bodytag+='<th>'+"NAME"+'</th>';
                         bodytag+='<th>'+"AGE"+'</th>';
                         bodytag+='<th>'+"DOB"+'</th>';
   bodytag+='</tr>';
     bodytag+='<tr>';
    bodytag+='</body>';
        bodytag+='<body>';
        Object.keys(names).sort().forEach(prop =>{
            
                        bodytag+='<tr>';
                        bodytag+= '<td>' + names[prop]+'</td>';
                        bodytag+= '</tr>';   
             
     
  })  
       Object.keys(ages).sort().forEach(prop =>{
            
                        bodytag+='<tr>';
                        bodytag+= '<td>' + ages[prop]+'</td>';
                        bodytag+= '</tr>';   
             
     
  })  
     Object.keys(DOBS).sort().forEach(prop =>{
            
                        bodytag+='<tr>';
                        bodytag+= '<td>' + DOBS[prop]+'</td>';
                        bodytag+= '</tr>';   
             
     
  }) 
     document.getElementById("tableData").innerHTML=bodytag;
    bodytag+='<body>';