import { useState } from "react"

export default function Contador() {
    const defaultValue = 0;
    const [counter, setCounter] = useState(defaultValue);
    const handleClick = () => setCounter(counter + 1);
    const handleDecrement = () => setCounter(counter - 1);
    const handleReset = () => setCounter(defaultValue);
    return (
    <div>
        <p>Valor: {counter}</p>
        <button onClick = {handleClick}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}