import React, {useState, useEffect} from 'react';

const Users = () => {
   const [loading, setLoading] = useState(false)
    const[users, setUsers] = useState([])

    useEffect(() =>{
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{
            setUsers(data)
            setLoading(false)
        })
    
    
    }, [])

    return(
    <>
    <h1>Users</h1>
    {
        loading === true
        ? 'Carregando ...'
        : ''
    }
    {
        users.map(user =>{
            return(
                <div style={{margin: '10px'}}>
                   <b>Nome:</b> {user.name} <br/>
                   <b>Email</b> {user.email} <br/>
                   <b>Telefone</b> {user.phone} <br/>
                   <b>Site</b> {user.website} <br/>
                   <br/><br/>
                </div>
            )
        })
    }
    </>
    )
    
}
export default Users