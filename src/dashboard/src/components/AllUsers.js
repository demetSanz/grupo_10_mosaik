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
                    <div>
                    <ul className="list-group list-group-flush">
                    {
                        
                        users.map((user , i) =>{
                          return  <li className="list-group-item" key = {user + i}>
                                ID: {user.id} - {user.email}
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

export default AllUsers;
