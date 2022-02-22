const signUp = document.querySelector('[name="signUp"]');

// const user = document.querySelector('input');

// const pswd = document.querySelector('[id="password"]');

// const pswd2 = document.querySelector('[id="conforMpassword"]');

function handleForm(e){
    e.preventDefault();
    const user = e.currentTarget.user.value; 
    const email = e.currentTarget.email.value; 
    const pswd = e.currentTarget.pswd.value; 
    const Cpswd = e.currentTarget.Cpswd.value; 

    // user succese and error

    const userText = document.querySelector(".userText");
    const inputSucceseError = document.querySelector("[id='name']");
    if (user.length <=8){ 
        userText.innerHTML="longer than 8 characters"; 
        inputSucceseError.style.border="1px solid red";     
    }else if (user.length >= 20){
        userText.innerHTML="less than 20 characters";
        inputSucceseError.style.border="1px solid red";
    }else {        
        userText.innerHTML="";
        // inputSucceseError.style.border="1px solid green";
    };
    // user succese and error end

    // email
    const emailError = document.querySelector('[name="email"]');
    const emailText=document.querySelector(".milText");
    if(email.length ==""){
        emailText.innerHTML="Your email is blank"
        emailError.style.border="1px solid red"; 
    }
    // email

    // password and confirm password
    const passwordText = document.querySelector(".passwordText");
    const passwordSucceseError = document.querySelector("[id='password']");
    if (pswd.length <=8){ 
        passwordText.innerHTML="longer than 8 characters"; 
        passwordSucceseError.style.border="1px solid red";  
    }else if (pswd.length >= 20){
        passwordText.innerHTML="less than 20 characters";
        error.classList.add("error");
        passwordSucceseError.style.border="1px solid red" ;  
    }else {        
        passwordText.innerHTML=""
    };

    //  ^password^


    const conforMpasswordText = document.querySelector(".conforMpasswordText");
    const conforMpasswordSucceseError = document.querySelector(".conforMpassword");

    if (Cpswd !== pswd){ 
        conforMpasswordText.innerHTML="confirm password not match"; 
        conforMpasswordSucceseError.style.border="1px solid red";       
    }else {        
        conforMpasswordText.innerHTML=""
    };

// password and confirm password end
    // signUp.reset(); 

};
signUp.addEventListener("submit",handleForm);
