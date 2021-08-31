

window.onload = function(){
    let name = document.querySelector('#nameRegister');
    name.focus();    
    let form = document.querySelector('#formRegister')
    
    form.addEventListener('submit',function(e){
        
        let errorsRegister =[];

    let name = document.querySelector('#nameRegister');
    let email = document.querySelector('#emailRegister');
    let address = document.querySelector('#addressRegister');
    let celular = document.querySelector('#phoneRegister');
    let password = document.querySelector('#passRegister');
    
        
    if(name.value == ""){
        name.classList.add('is-invalid');
        errorsRegister.push('El nombre no puede estar vacio');

    }else if (name.value.length < 5){
        name.classList.add('is-invalid');
        errorsRegister.push('El nombre debe tener minimo 5 caracteres')
    }else{
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        email.focus();  
    };

    if(email.value == ""){
        email.classList.add('is-invalid');
        errorsRegister.push(' Debe ingresar  un email')
    }else{
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        address.focus();
    };

    if(address.value == ""){
        address.classList.add('is-invalid');
        errorsRegister.push('Tu direccion no puede estar vacia')
    }
    else{
        address.classList.remove('is-invalid');
        address.classList.add('is-valid');
        celular.focus();
    }

    if(celular.value == ""){
        celular.classList.add('is-invalid');
        errorsRegister.push('Debe ingresar una numero de telefono')
    }else if (celular.value.length < 10){
            celular.classList.add('is-invalid');
            errorsRegister.push('El numero de telefono  debe tener 10 caracteres')
    }else{
        celular.classList.remove('is-invalid');
        celular.classList.add('is-valid');
        password.focus();
    };

    if(password.value == ""){
        password.classList.add('is-invalid');
        errorsRegister.push('Debe ingresar una contraseña')
    }
    if(errorsRegister.length >0){
        e.preventDefault();
        let MessagesErrors = document.querySelector('.errors');
        MessagesErrors.innerHTML ='';
        MessagesErrors.classList.add('warning');
        for(let i = 0; i <errorsRegister.length; i++){
        MessagesErrors.innerHTML += `<li> ${errorsRegister[i]} <li>`
        }
    }else{
       //alert('subio con exito');
     
       
    form.submit();
       
    }
    })
}
