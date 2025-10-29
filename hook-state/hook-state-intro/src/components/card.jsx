import { useState } from "react"

export default function Caja({children, content}) {  
    const [show, setShow] = useState(false);
    const handleToggle = () => setShow(!show);
    return (
    <div className="container">
        <button onclick={handleToggle}>
            {show ? `Ocultar ${content}` : `Mostrar ${content}`}
        </button>
        {show && <div className="card">{children}</div>}
    </div>
  )
}
