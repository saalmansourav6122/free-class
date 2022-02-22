const signUp = document.querySelector('[name="signup"]');
console.log(signUp);

function handelSubmit(e){
    e.preventDefault();
    const name = e.currentTarget.user.value;
    const password1= e.currentTarget.password.value;
    console.log(name);

    const inputEs =document.querySelector(".input");
    const inputText =document.querySelector("h1");
        console.log(inputEs);



        if(name==name || name.length<=2||name.length==""|| password1==password1 || password1.length<2 || password1.length==""){
            alert("blank")
            inputText.textContent="error";
            return false;
        } else if(name==!name || name.length>=5|| password1==!password1 || password1.length>=2){
            inputEs.classList.add("success");
            inputText.textContent="success";
            return true;
        }
}

signUp.addEventListener("submit",handelSubmit);

