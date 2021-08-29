import React,{useState,useEffect} from 'react';


function LastUser(){
    const [users, setUsers] = useState([]);

    const obtenerDatos = async () => {
        const data = await  fetch('http://localhost:3003/users/apiview')
        const users = await data.json()
       
        
        
        
        setUsers(users.data);
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                       users.length > 0 ? users[users.length -1].name : "Cargando API..."
                    }
                    </div>
                    <p></p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Usuario</a>
                </div>
            </div>
        </div>
    )
}

export default LastUser;
