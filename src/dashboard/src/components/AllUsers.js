import React,{useState,useEffect} from 'react';


function AllUsers(){
    const [users, setUsers] = useState([]);

    const obtenerDatos = async ()=>{
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
                    <h5 className="m-0 font-weight-bold text-gray-800">Todos los Usuarios</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                        
                        users.map((user , i) =>{
                          return  <li key = {user + i}>
                                {user.id} -{user.name}
                            </li>
                        })
                        
                    }
                    </div>
                    <p></p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Usuario</a>
                </div>
            </div>
        </div>
    )
}

export default AllUsers;
