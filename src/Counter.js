import React, { useEffect, useState } from "react"; 
import './Counter.css'



const Counter = () => {
    const [contador, setContador] = useState(0) //useState uma das coisas mais importantes para aplicar na operação
    const [teste, setTeste] = useState('teste')
    
    //useEffect
    useEffect(() => {
        console.log('ok alterou')
    }, [teste])

    useEffect(() => {
        console.log('alterando o contador')
    }, [contador])

    
    const handleOnClick = operador =>{
        let newValue = operador === '+' 
        ? contador + 1
        : contador - 1
        setContador(newValue)
    } 

    return (

    <div className="counter">
        <span>{contador}</span>
        <button onClick={() => handleOnClick('-')}>-</button>
        <button onClick={() => handleOnClick('+')}>+</button>
        <button onClick={() => setTeste('outrovalor')}>Teste</button>
    </div>
   
  );
}

export default Counter;