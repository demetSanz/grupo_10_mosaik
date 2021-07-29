let input = document.querySelector("#inputP");
let span = document.querySelector("#showP");

span.addEventListener("click",() =>{
  if(input.type === "password"){
    span.classList.remove("fa-eye-slash");
    span.classList.add("fa-eye");
    input.type ="text";
  }else{
    span.classList.remove("fa-eye");
    span.classList.add("fa-eye-slash");
    input.type ="password";
  }
})