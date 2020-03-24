var button = document.querySelector('.button');
button.onclick = function () {
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
function regvalidate()

{    
    var fnameRes;var snameRes;var unameRes;var enameRes;var pnumRes;var pcnumRes;
    fnamevalidity();
    snamevalidity();
    unamevalidity();
    emailValidity();
    phoneValidity();
    pincodeValidity();
    //document.getElementById('fnet').addEventListener("input", fnamevalidity);
    function fnamevalidity() {
    var rfname=document.registerationform.fnametxt.value;
    if(rfname == "") {
        document.getElementById('fnet').className = 'error';
        document.getElementById('fne').innerHTML = "First name cannot be empty ";      
    } else {
    var fnameRGEX = /^[a-zA-Z]{6,}$/;
      fnameRes=fnameRGEX.test(rfname);
    if(fnameRes==false){
         document.getElementById('fne').innerHTML = "First name  must be 6 charechters ";
         document.getElementById('fnet').className = 'error';
         registerationform.fnametxt.focus();
        return false;
    }
    else if(fnameRes==true){
        document.getElementById('fnet').className = 'success';
    }
    }}
    function snamevalidity(){
    var rfsname=document.registerationform.snametxt.value;
        if(rfsname == "") {
        document.getElementById('sne').innerHTML = "last name cannot be empty ";
        document.getElementById('snet').className = 'error';
    }else{
    var snameRGEX = /^[a-zA-Z]{2,8}$/;
     snameRes=snameRGEX.test(rfsname);
    if(snameRes==false){
         document.getElementById('sne').innerHTML = "last name  must be 2-8char ";
        document.getElementById('snet').className = 'error';
         registerationform.fnametxt.focus();
        return false;
    }else if(snameRes==true){
        document.getElementById('snet').className = 'success';
    }
    }
    }
    function unamevalidity(){
    var rfuname=document.registerationform.unametxt.value;
     if(rfuname == "") {
               document.getElementById('mne').innerHTML = "username cannot be empty";
                document.getElementById('unet').className = 'error';
     }
    else{
    var unameRGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
     unameRes=unameRGEX.test(rfuname);
     if(unameRes==false){
         document.getElementById('mne').innerHTML = "Minimum 8 characters At least one uppercase characte one lower case one special char one digit ";
         document.getElementById('unet').className = 'error';
         registerationform.unametxt.focus();
        return false;
    }else if(unameRes==true){
        document.getElementById('unet').className = 'success';
    }}
    }
    function emailValidity(){
     var rfename=document.registerationform.emailtxt.value;
     if(rfename == "") {
         document.getElementById('ene').innerHTML=" email cannot be empty";
         document.getElementById('enet').className = 'error';
     }else{
    var enameRGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     enameRes=enameRGEX.test(rfename);
     if(enameRes==false){
        document.getElementById('ene').innerHTML="invalid email";
         document.getElementById('enet').className = 'error';
        registerationform.emailtxt.focus();
        return false;
    }else if(enameRes==true){
        document.getElementById('enet').className = 'success';
    }
    }
    }
    function phoneValidity(){
    var rfpnum=document.registerationform.phonetxt.value;
    if(rfpnum == "") {
      document.getElementById('pne').innerHTML = "phone number cannot be empty";
     document.getElementById('pnet').className = 'error';
     }else{
    var pnumRGEX = /^[0-9]{10}$/;
    pnumRes=pnumRGEX.test(rfpnum);
     if(pnumRes==false){
         document.getElementById('pne').innerHTML = "10 digits required";
         document.getElementById('pnet').className = 'error';
         registerationform.phonetxt.focus();
        return false;
    }else if(pnumRes==true){
        document.getElementById('pnet').className = 'success';
    }
     }
    }
    function pincodeValidity(){
     var rfpcnum=document.registerationform.pctxt.value;
    if(rfpcnum == "") {
        document.getElementById('pcne').innerHTML = "pincode cannot be empty";
        document.getElementById('pcnet').className = 'error';
     }else{
    var pcnumRGEX = /^[0-9]{8}$/;
         pcnumRes=pcnumRGEX.test(rfpcnum);
    if(pcnumRes==false){
         document.getElementById('pcne').innerHTML = "8 digits required";
         document.getElementById('pcnet').className = 'error';
         registerationform.pctext.focus();        
        return false;
     }else if(pcnumRes==true){
        document.getElementById('pnet').className = 'success';
    }
     }    
    }
    if(fnameRes==true&& snameRes==true &&unameRes==true&& enameRes==true&& pnumRes==true &&pcnumRes==true){
        return true;
    }else{
        return false;
    }
}