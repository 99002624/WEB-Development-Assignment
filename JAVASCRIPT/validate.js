var Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

function validate(){
    var Name = document.getElementById("Username").value;
    var EmailId = document.getElementById("Email").value;
    var Password1 = document.getElementById("Pass").value;
    var PhoneNo = document.getElementById("Phone").value;
    var len = Name.lenght;
    var len1 = PhoneNo.lenght;
    if(Name==""){
        alert("Enter the name"+len);
    }
    else if(len<5 && len>15){
        alert("Name lenght should be between 5 and 15 characters");
    }
    else if(!Password1.match(Password)){
        alert("password does meet req");

    }
    else if(PhoneNo==""){
        alert("enter phone number ")
    }
    else if(len1==10){
        alert("enter corret phone number"+" "+len1)
        var vald = parseInt(PhoneNo);
    }
    else if(vald=='NaN'){
        
           alert("enter the number");
         
    }
    else {

        valuser();

    }
}
function valuser(){ 
    
    // var len = Name.lenght;
        var uns=["SAI KIRAN","DEVINENI","KUMAR","SAI"];
        var f=0;
        var uname1=document.getElementById("Username").value;
// uname=prompt('Enter username');
        for(let i=0;i<uns.lenght;i++){
            if(uname1==uns[i]){
                f=1;
                break;
            }
        }
        if(f==1){
            alert("user name alkready exits");
        }
        else{
            document.getElementById("display").innerHTML=Name + " "+EmailId+ " "+PhoneNo+" ";
        }
    }