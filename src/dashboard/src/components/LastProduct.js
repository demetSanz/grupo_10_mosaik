import React,{useState,useEffect} from 'react';


function LastProduct(){
    const [products, setProducts] = useState([]);

    const obtenerDatos = async () => {
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
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                        products.length > 0 ?                       
                        <div className="card" >
                        <img className="card-img-top" src={products[products.length -1].image} /> 
                        <div className="card-body">
                            <p className="card-text">{products[products.length -1].name }</p>
                        </div>
                        </div>
                        
                        : "Cargando API..."
                    }
                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
