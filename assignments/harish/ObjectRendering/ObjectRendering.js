 var Obj = 
                        {
                            name: "harish",
                            age:  21,
                            phone: "note7",
                            city:"hyderabad",
                            sex:"male",
                            maritalStatus:"single",
                            qualification:"Btech",
                            department:"ECE",
                            yearofJoining:2016,
                            yearofPassing:2020,
                            school:"Narayana concept school",
                            college:"st.peters engineering college",
                            fatherName:"Ramesh",
                            MotherName:"Sandhya",
                            hobbies:"cricket",
                            food:"Non-Veg",
                            vehicle:"two-wheeler",

                        };
                        var a = '<body>';
                        var b = '<body>';
                        var objects = Object.keys(Obj).sort();
                        for(var p in objects){
                        b +='<th>'+ objects[p] + '</th>';
                        b += '</body>';
                        }
                        document.getElementById("body").innerHTML = b;
                        objects.forEach(prop =>{
                          a +='<td>'+Obj[prop] + '</td>';
                          a += '</body>';
   
                        })
                            document.getElementById("Details").innerHTML=a;