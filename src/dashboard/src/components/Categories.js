
import React,{useState,useEffect} from 'react';

function AllCategories(){
  const [category, setCategory] = useState([]);

  const obtenerDatos = async ()=>{
      const data = await  fetch('http://localhost:3003/category/apiview')
      const category = await data.json()
     
      setCategory(category.data);
    
  }
  useEffect(() => {
      obtenerDatos()
  }, [])

  return(
    <div className="col-lg-6 mb-4">
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
         Categoria de Productos
        </h5>
      </div>
      <div className="card-body">
      <div className="row">
      {
                        
       category.map((category , i) =>{
            
          return  <div className="col-lg-6 mb-4" key = {category + i}>
                     <div className="card bg-dark text-white shadow">
                        <div className="card-body">{category.name}</div>
                     </div>                               
                  </div>
      })                    
                 
                        
        }
       
      </div>
    </div>
  </div>
  </div>
);
}

export default AllCategories;