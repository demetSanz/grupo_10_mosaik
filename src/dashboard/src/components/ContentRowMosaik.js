import React,{useState,useEffect} from 'react';
import SmallCard from './SmallCard';

/***************CAMBIAR NOMBRE DE VARIABLES************ */


/*  Cada set de datos es un objeto literal */

/* <!-- Mosaik in DB --> */


function ContentRowMosaik(){

    const [products, setProducts] = useState([]);

    const obtenerDatosProducts = async ()=>{
        const data = await  fetch('http://localhost:3003/product/apiview')
        const products = await data.json()
       
        setProducts(products);      
    }
    useEffect(() => {
        obtenerDatosProducts()
    }, [])


    const [users, setUsers] = useState([]);

    const obtenerDatosUsers = async ()=>{
        const data = await  fetch('http://localhost:3003/users/apiview')
        const users = await data.json()
       
        setUsers(users);
      
    }
    useEffect(() => {
        obtenerDatosUsers()
    }, [])

const [category, setCategory] = useState([]);

  const obtenerDatosCategory = async ()=>{
      const data = await  fetch('http://localhost:3003/category/apiview')
      const category = await data.json()
     
      setCategory(category);
    
  }
  useEffect(() => {
    obtenerDatosCategory()
  }, [])



let productsInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: products.total,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let usersInDB = {
    title:'Total de Usuarios', 
    color:'success', 
    cuantity: users.total,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let categoryInDB = {
    title:'Total de categorias' ,
    color:'warning',
    cuantity: category.total,
    icon:'fa-user-check'
}

let cartProps = [productsInDB, usersInDB, categoryInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMosaik;