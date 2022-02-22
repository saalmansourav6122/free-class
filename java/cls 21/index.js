// const link = document.querySelector(".link");

// link.addEventListener("click",function(event){
//     event.preventDefault();
//     console.log("it is ok");
// });

const signUp = document.querySelector('[name="signup"]');
signUp.addEventListener("submit",function(event){
    event.preventDefault();
    const user =event.currentTarget.user.value;
    const mail=event.currentTarget.mail.value;
    const post=event.currentTarget.post.value;

    const heading = document.querySelector(".heading");
    heading.textContent=post;
    document.body.append(heading);
    console.log(mail);
    console.log(user);
    console.log(post);
    signUp.reset();
})