

window.onload = function(){
    let product = document.querySelector('#nameProduct');
    product.focus();    
    let form = document.querySelector('#form')
    
    form.addEventListener('submit',function(e){
        
        let errors =[];

    let product = document.querySelector('#nameProduct');
    let price = document.querySelector('#price');
    let description = document.querySelector('#description');
    let stock = document.querySelector('#stock');
    let brand = document.querySelector('#brand');
        
    if(product.value == ""){
        product.classList.add('is-invalid');
        errors.push('El campo no puede estar vacio');

    }else if (product.value.length < 5){
        product.classList.add('is-invalid');
        errors.push('El campo debe tener minimo 5 caracteres')
    }else{
        product.classList.remove('is-invalid');
        product.classList.add('is-valid');
        price.focus();  
    };

    if(price.value == ""){
        price.classList.add('is-invalid');
        errors.push('El campo debe tener un precio')
    }else{
        price.classList.remove('is-invalid');
        price.classList.add('is-valid');
        description.focus();
    };

    if(description.value == ""){
        description.classList.add('is-invalid');
        errors.push('La descripcion no puede estar vacia')
    }else if (description.value.length < 20){

        description.classList.add('is-invalid');
        errors.push('El campo debe tener al menos 20 caracteres')
    }else{
        description.classList.remove('is-invalid');
        description.classList.add('is-valid');
        stock.focus();
    }

    if(stock.value == ""){
        stock.classList.add('is-invalid');
        errors.push('Debe ingresar una cantidad')
    }else{
        stock.classList.remove('is-invalid');
        stock.classList.add('is-valid');
        brand.focus();
    };
    if(brand.value == ""){
        brand.classList.add('is-invalid');
        errors.push('Debe ingresar un nombre de marca')
    }else if (product.value.length < 5){
        brand.classList.add('is-invalid');
        errors.push('Debe ingresar al menos 5 caracteres')
    }else{
        brand.classList.remove('is-invalid');
        brand.classList.add('is-valid');
    }

    if(errors.length >0){
        e.preventDefault();
        let MessagesErrors = document.querySelector('.errors');
        MessagesErrors.innerHTML ='';
        MessagesErrors.classList.add('warning');
        for(let i = 0; i <errors.length; i++){
        MessagesErrors.innerHTML += `<li> ${errors[i]} <li>`
        }
     }
    //  else{
    //     alert('subio con exito');
    //    // form.submit();

      
    // }
    })
}
