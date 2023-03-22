import React, {useState, useEffect} from 'react';
import Loading from '../components/Loading';

const Albuns = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [albuns, setAlbuns] = useState([])
    
    
    useEffect(() =>{
        setIsLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbuns(data)
            setIsLoading(false)
        })
    }, [])
    
    return(
    <>
    
    
    <Loading visible={isLoading}/> 
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