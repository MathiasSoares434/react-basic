import React, {useState, useEffect} from 'react';

const Albuns = () => {
    const [loading, setLoading] = useState(false)
    const [albuns, setAlbuns] = useState([])
    
    
    useEffect(() =>{
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbuns(data)
            setLoading(false)
        })
    }, [])
    
    return(
    <>
    
    <h1>Albúns</h1>
    {
        loading === true 
        ? 'Carregando ...'
        : ''
    }
    {
        albuns.map(album => {
            return(
                <div>
                    <span>{album.title} - id: {album.id}</span>
                </div>
            )
        })
    }
    </>
    )
    
}
export default Albuns