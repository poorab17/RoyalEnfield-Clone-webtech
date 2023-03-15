function fn(){
    var a=document.getElementById("uname");
    var b=document.getElementById("pass");
    
    if(a.value.trim()=="" && b.value.trim()=="")
    {
        // alert("username and password is required");
         document.getElementById("unameh6").innerHTML="username is requird";
         document.getElementById("passh6").innerHTML="password is requird";
         
         a.style.border="1px solid red";
         b.style.border="1px solid red";
         return false;
    }
    else if(b.value.trim()=="")
    {
        // alert(" password is required");
        document.getElementById("passh6").innerHTML="password is requird";
        b.style.border="1px solid red";
        return false;
    }

     else if(a.value.trim()=="" )
    {
         //alert("username is required");
        
         document.getElementById("unameh6").innerHTML="username is requird";
         a.style.border="1px solid red";
         return false;
    }

    else if(a.value.trim()=="deepak" && b.value.trim()=="gupta")
    {
        alert("username and password is matching");
        //document.getElementById("btnh6").innerHTML="username and password is matching";
        return true;
    }

    else if(a.value.trim()=="suji" && b.value.trim()=="chuby")
    {
       alert("username and password is matching");
       // document.getElementById("btnh6").innerHTML="username and password is matching";
       a.style.border="1px solid red";
       b.style.border="1px solid red";
       return true;
    }

    else 
    {
         alert("username and password is not matching");
        //document.getElementById("btnh6").innerHTML="username and password is not matching";
        document.getElementById("btn").style.display="none";
        return false;
    }
}