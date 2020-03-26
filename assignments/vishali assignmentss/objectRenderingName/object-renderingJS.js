var Names= {
      
    Name:'vishali',
	Name1:'manchana',
	Name2:'vyshnvi',
	Name3:'deepa',
	Name4:'kartika',
	Name5:'vydehi',
	Name6:'ravali',
	Name7:'ishali',
	Name8:'anchana',
	Name9:'vyshnvi',
	Name10:'deepa',
	Name11:'artika',
	Name12:'ydehi',
	Name13:'avali',
	Name14:'deepa',
	Name15:'kartika',
	Name16:'vydehi',
	Name17:'ravali',
	Name18:'ishali',
	Name19:'vyshnvi',
	Name20:'deepa',
	
}
	
var table = '<body>';
        var data = '<body>';
        var keys = Object.keys(Names);
        sortedkeys=keys.sort();
        for(var i in keys){
          data+='<th>'+ keys[i] + '</th>';
            data += '</body>';
        }
        document.getElementById("headerData").innerHTML = data;
        sortedkeys.forEach(prop =>{
            
            table +='<td>'+ Names[prop] + '</td>';
            table += '</body>';
           
        })
         document.getElementById("dataInTable").innerHTML=table;
 
 
 
 