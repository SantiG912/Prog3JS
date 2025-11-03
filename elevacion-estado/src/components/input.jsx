import React, { useState } from 'react'

export default function Input({id, value, onChange}) {
    const [text, setText] = useState("");
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);
    return (
    <>
        <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <p>Texto en mayúsculas: {text.toUpperCase()}</p>
            <input 
            type="number" 
            id="numberA" 
            name="numberA" 
            value={numA}
            onChange={({target}) => setNumA(target.value)}
            />
        <input 
            type="number" 
            id="numberB" 
            name="numberB" 
            value={numB}
            onChange={({target}) => setNumB(target.value)}
        />
        <p>Suma: {Number(numA) + Number(numB)}</p>
        <p>Resta: {Number(numA) - Number(numB)}</p>
        <p>Multiplicación: {Number(numA) * Number(numB)}</p>
    </>
    )
}
