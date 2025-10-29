export default function Productos({nombre, precio, stock}) {
    
    return (
        <div className="card">
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock > 0 ? "Disponible ✅" : "Agotado ❌"}</p>
        </div>
    )
}
