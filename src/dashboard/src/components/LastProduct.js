import React,{useState,useEffect} from 'react';
//import imagenFondo from '../assets/images/mandalorian.jpg';

function LastProduct(){
    const [products, setProducts] = useState([]);

    const obtenerDatos = async () => {
        const data = await  fetch('http://localhost:3003/product/apiview')
        const products = await data.json()
       
        
        // console.log(products.data[products.data.length - 1]);
        
        setProducts(products.data);
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">ULTIMO PRODUCTO</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                        products.length > 0 ? products[products.length -1].name : "Cargando API..."
                    }
                    </div>
                    <p></p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Usuario</a>
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
