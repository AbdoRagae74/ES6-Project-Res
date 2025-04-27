
import { User } from "./utils.js";

var nameSign = document.querySelector("#nameSignup");
var emailSign = document.querySelector("#emailSignup");
var passSign = document.querySelector("#passwordSignup");
var passRepSign = document.querySelector("#passwordSignupRepeated");
var signbtn = document.querySelector("#SignupButton");
var validatoins = [false,false,false,false] 

nameSign.addEventListener("input",()=>{
    
    const nameRegex = /^[a-z]{5,}$/i;
    var name =    nameRegex.test(nameSign.value);
    if(name){
        console.log(name);
        nameSign.classList.add("is-valid")
        nameSign.classList.remove("is-invalid")
        validatoins[0] = true;
    }
    else{
        nameSign.classList.add("is-invalid")    
        nameSign.classList.remove("is-valid")   
        validatoins[0] = false;
    }

})

emailSign.addEventListener("input",()=>{
    
    const emailRegex = /^[A-Za-z]{1,}[a-zA-Z0-9._-]*@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/  
    var mail =emailRegex.test(emailSign.value);
    if(mail){
        emailSign.classList.add("is-valid")
        emailSign.classList.remove("is-invalid")
        validatoins[1] = true;
    }
    else{
        emailSign.classList.add("is-invalid")    
        emailSign.classList.remove("is-valid")    
        validatoins[1] = false;
    }

})

passSign.addEventListener("input",()=>{
    
    const passRegex = /^[A-Za-z0-9*/.-@!#$%^&*()+~`]{8,}$/  
    var pass =passRegex.test(passSign.value);
    if(pass){
        passSign.classList.add("is-valid")
        passSign.classList.remove("is-invalid")
        passRepSign.disabled=false;
        validatoins[2] = true;
    }
    else{
        passSign.classList.add("is-invalid")    
        passSign.classList.remove("is-valid")    
        validatoins[2] = false;
    }

})
passRepSign.addEventListener("input",()=>{
    
    var pass = (passRepSign.value) == (passSign.value);
    if(pass){
        passRepSign.classList.add("is-valid")
        passRepSign.classList.remove("is-invalid")
        validatoins[3] = true;
    }
    else{
        passRepSign.classList.add("is-invalid")    
        passRepSign.classList.remove("is-valid")    
        validatoins[3] = false;

    }

})
signbtn.addEventListener("click",(e)=>{
    let duplicated = false;
    e.preventDefault();
    var valid = true;
    for(var i of validatoins){
        if(!i)
            valid = false;
    }

    if(!valid) 
        Swal.fire({
            title: 'Invalid data!',
            text: 'Please enter valid data.',
            icon: 'warning',
            confirmButtonText: 'OK',
            confirmButtonColor: '#d33'
          });
    else {
        let usersData = JSON.parse(localStorage.getItem("users"))||[] ;
        usersData = usersData.map(user => User.fromObject(user));
        let userMail = emailSign.value;
        usersData.forEach(element => {
            if(element.checkUser(userMail)){
                duplicated = true;
                // return;
            }
        });
        if(duplicated)
            Swal.fire("U already have an account try to log in instead !");
        else{
            Swal.fire({
                title: 'Account created!',
                text: 'Your account created successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((res)=>{
                if(res.isConfirmed){
                var newUser = new User(usersData.length+1,nameSign.value,emailSign.value,passSign.value);
                usersData.push(newUser);
                localStorage.setItem("users",JSON.stringify(usersData));
                console.log(usersData);
                location.replace("index.html");}
            });
        }
        
    }
})




