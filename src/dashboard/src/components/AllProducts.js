import React,{useState,useEffect} from 'react';


function AllProducts(){
    const [products, setProducts] = useState([]);

    const obtenerDatos = async ()=>{
        const data = await  fetch('http://localhost:3003/product/apiview')
        const products = await data.json()
       
        setProducts(products.data);
      
    }
    useEffect(() => {
        obtenerDatos()
    }, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Todos los Productos</h5>
                </div>
                <div className="card-body">
                    <div>
                        <ul className="list-group list-group-flush">
                        {
                        
                        products.map((product , i) =>{
                          return  <li className="list-group-item" key = {product + i}>
                               ID: {product.id} - {product.name}
                            </li>
                        })
                        
                    }
                        </ul>
                    
                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
    )
}

export default AllProducts;
