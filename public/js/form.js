let email = document.getElementById("email");
let error= document.getElementById("error");

function validate(){
    let regexp = /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    
    if(email.value.trim()==""){
     error.innerHTML = "Email cannot be empty";
     error.style.color = "red";
     return false;
       
         }
        
     else if(regexp.test(email.value)){

        error.innerHTML = "valid email address; Sending email ...";
        error.style.color = "green";
        return true;
    
        
         }
        else{
            error.innerHTML = "Invalid email address";
        error.style.color = "red";
        return false;
         }
         
        }