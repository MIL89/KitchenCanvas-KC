const pwd_box = document.querySelector(".pwd-val");
const displayBtn = document.querySelector(".show");
displayBtn.addEventListener("click",function(){
    if(pwd_box.type === "password"){
        pwd_box.type= "text";
        displayBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
       
    }else{
        pwd_box.type= "password";
        displayBtn.innerHTML = '<i class="fas fa-eye"></i>';
       
        displayBtn.style.color= "#222";
    }
})