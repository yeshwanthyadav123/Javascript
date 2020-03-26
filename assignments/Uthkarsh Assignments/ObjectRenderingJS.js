var Students = [
            { Id : 100,FName : 'Uthkarsh',LName : 'Cheekati',Age : 21,DOB : '20/05/1998',Sex : 'male',
            Edu : 'btech',College : 'Kits',Dept :'CSE',Status : 'Persuing',Height : '5.10',Weight :  51,
            Section : 'two',Grade : 'B',Percentage : '76%',GPA : '7.6'}
        ];
    Students.push({Id:102,FName : 'Harsha',LName : 'Cheekati',Age : 25,DOB : '22/08/1994',Sex : 'male',
        Edu : 'Mtech',College : 'GCE',Dept :'CSE',Status : 'Graduated',Height : '5.9',Weight :  64,
        Section : 'one',Grade : 'A',Percentage : '67%',GPA : '6.7',});
    Students.push({Id:103,FName : 'Vihari',LName : 'Cheekati',Age : 21,DOB : '06/08/1997',Sex : 'male',
        Edu : 'BE',College : 'MGDC',Dept :'Artech',Status : 'Persuing',Height : '5.9',Weight :  60,
        Section : 'two',Grade : 'D',Percentage : '96%',GPA : '9.5',});

    var thead = '<tr>';
    var tbody = '';
    
    for (let index = 0; index < Students.length; index++) {
        let eachRecordRawData = Students[index];
        // eachRecordRawData = Object.keys(eachRecordRawData).reduce((c, k) => (c[k.toUpperCase()] = eachRecordRawData[k], c), {});
        let eachRecord = {}
        Object.keys(eachRecordRawData).sort().forEach((value, index) => {
            eachRecord[value] = eachRecordRawData[value] 
        });
        
        let tRow = '<tr>'
        for (const key in eachRecord) {
            if (index === 0) {
                thead += '<th>' + key + '</th>';
            }
            tRow += '<td>' + eachRecord[key] + '</td>';
        }
        tRow += '</tr>'
        tbody += tRow;
    }
    
    
    thead += '</tr>';
    tbody += '</tr>';
    
    document.getElementById('table-head').innerHTML = thead;
    document.getElementById('table-body').innerHTML = tbody;
