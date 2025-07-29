document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("signupForm").addEventListener("submit", (e)=>{
    const mail=document.getElementById("mail").value
    const password=document.getElementById("password").value
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(mail)){
        alert("enter a valid mail")
        e.preventDefault();
    }
    if(password.length<6){
        alert("password must contain 6 characters")
        e.preventDefault();
    }
})
})
