//use strict";
function validation(){
    var fname= document.querySelector("#first").value;
    var lname= document.querySelector("#last").value;
    var eid= document.querySelector("#eml").value;
    var pwd= document.querySelector("#pass").value;
    var locate= document.querySelector("#locate").value;
    var cmp= document.querySelector("#cname").value;
    var validation=0;

    if(document.querySelector("#spn1")){
        var elm1= document.querySelector("#spn1");
        elm1.parentNode.removeChild(elm1);
        validation=0;
    }
    if(document.querySelector("#spn2")){
        var elm2= document.querySelector("#spn2");
        elm2.parentNode.removeChild(elm2);
        validation=0;
    }
    if(document.querySelector("#spn3")){
        var elm3= document.querySelector("#spn3");
        elm3.parentNode.removeChild(elm3);
        validation=0;
    }
    if(document.querySelector("#spn8")){
        var elm8= document.querySelector("#spn8");
        elm8.parentNode.removeChild(elm8);
        validation=0;
    }
    if(document.querySelector("#spn4")){
        var elm4= document.querySelector("#spn4");
        elm4.parentNode.removeChild(elm4);
        validation=0;
    }
    if(document.querySelector("#spn5")){
        var elm5= document.querySelector("#spn5");
        elm5.parentNode.removeChild(elm5);
        validation=0;
    }
    if(document.querySelector("#spn6")){
        var elm6= document.querySelector("#spn6");
        elm6.parentNode.removeChild(elm6);
        validation=0;
    }
    if(document.querySelector("#spn7")){
        var elm7= document.querySelector("#spn7");
        elm7.parentNode.removeChild(elm7);
        validation=0;
    }

    if(fname==""){
        document.querySelector("#first").insertAdjacentHTML('afterend', '<p id="spn1" style="color:red">cannot leave this empty</p>');
        validation=1;
    }



    if(lname==""){
        document.querySelector("#last").insertAdjacentHTML('afterend', '<p id="spn2" style="color:red">cannot leave this empty</p>');
        validation=1;
    }


    if(eid==""){
        document.querySelector("#eml").insertAdjacentHTML('afterend', '<p  id="spn3" style="color:red">cannot leave this empty</p>');
        validation=1;
    }

    if(pwd==""){
        document.querySelector("#pass").insertAdjacentHTML('afterend', '<p id="spn4" style="color:red">cannot leave this empty</p>');
        validation=1;
    }


    if(locate==""){
        document.querySelector("#locate").insertAdjacentHTML('afterend', '<p id="spn5" style="color:red">cannot leave this empty</p>'); 
        validation=1;
    }


    if(cmp==""){
        document.querySelector("#cname").insertAdjacentHTML('afterend', '<p id="spn6" style="color:red">cannot leave this empty</p>');
        validation=1;
    }

    var gender="";
    for(var i=0;i<document.getElementsByName("gender").length;i++){
        if(document.getElementsByName("gender")[i].checked){
            gender=document.getElementsByName("gender")[i].value   
        } 
    }
    if(gender==""){
        document.querySelector(".gen").insertAdjacentHTML('afterend', '<p id="spn7" style="color:red">please select gender</p>'); 
        validation=1;
    } 



    if(validation==0){
        if(localStorage.details !=undefined) {
            var users = JSON.parse(localStorage.details);
        } 
        else {
            var users = [];
        }
       
        var obj = {
            FirstName:fname,
            LastName:lname,
            Email:eid,
            Password:pwd,
            Location:locate,
            Company:cmp,
            Gender:gender
            };

        users.push(obj);

        localStorage.details = JSON.stringify(users);


        //document.getElementsById("last").value = " ";
        
        var resp=JSON.parse(localStorage.details),
            len=resp.length,
            html='';
        
        html='<table border="1" style="border-collapse:collapse;">';
        html+='<tr><td>FirstName</td>';
        html+='<td>LastName</td>';
        html+='<td>Email</td>';
        html+='<td>Password</td>';
        html+='<td>Location</td>';
        html+='<td>Company</td>';
        html+='<td>Gender</td></tr>';
        
        for(var i=0;i<len;i++){
            html+='<tr>';
            html+='<td>'+resp[i].FirstName+'</td>';
            html+='<td>'+resp[i].LastName+'</td>';
            html+='<td>'+resp[i].Email+'</td>';
            html+='<td>'+resp[i].Password+'</td>';
            html+='<td>'+resp[i].Location+'</td>';
            html+='<td>'+resp[i].Company+'</td>';
            html+='<td>'+resp[i].Gender+'</td>';
            html+='</tr>';
        }
        
        document.querySelector("#cntr").innerHTML=html;
        
    }
    
    
}
