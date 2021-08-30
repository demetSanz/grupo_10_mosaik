window.onload = function(){
    let product = document.querySelector('#nameEdit');
    product.focus();    
    let form = document.querySelector('#formEdit')
    
    form.addEventListener('submit',function(e){
        
        let errorsEdit =[];

    let product = document.querySelector('#nameEdit');
    let price = document.querySelector('#priceEdit');
    let description = document.querySelector('#descriptionEdit');
    let stock = document.querySelector('#stockEdit');
    let brand = document.querySelector('#brandEdit');
        
    if(product.value == ""){
        product.classList.add('is-invalid');
        errorsEdit.push('El nombre no puede estar vacio');

    }else if (product.value.length < 5){
        product.classList.add('is-invalid');
        errorsEdit.push('El nombre debe tener minimo 5 caracteres')
    }else{
        product.classList.remove('is-invalid');
        product.classList.add('is-valid');
        price.focus();  
    };

    if(price.value == ""){
        price.classList.add('is-invalid');
        errorsEdit.push(' Debe ingresar  un precio')
    }else{
        price.classList.remove('is-invalid');
        price.classList.add('is-valid');
        description.focus();
    };

    if(description.value == ""){
        description.classList.add('is-invalid');
        errorsEdit.push('La descripcion no puede estar vacia')
    }else if (description.value.length < 20){

        description.classList.add('is-invalid');
        errorsEdit.push('descripcion debe tener al menos 20 caracteres')
    }else{
        description.classList.remove('is-invalid');
        description.classList.add('is-valid');
        stock.focus();
    }

    if(stock.value == ""){
        stock.classList.add('is-invalid');
        errorsEdit.push('Debe ingresar una cantidad')
    }else{
        stock.classList.remove('is-invalid');
        stock.classList.add('is-valid');
        description.focus();
    };

    if(brand.value == ""){
        brand.classList.add('is-invalid');
        errorsEdit.push('Debe ingresar una marca')
    }
    if(errorsEdit.length >0){
        e.preventDefault();
        let MessagesErrors = document.querySelector('.errors');
        MessagesErrors.innerHTML ='';
        MessagesErrors.classList.add('warning');
        for(let i = 0; i <errorsEdit.length; i++){
        MessagesErrors.innerHTML += `<li> ${errorsEdit[i]} <li>`
        }
    }else{
       // alert('subio con exito');
        form.submit();
    }
    })
}
