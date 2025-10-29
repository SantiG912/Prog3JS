import Caja from "./components/card";
import Contador from "./components/contador";
import Productos from "./components/productos";
import dataProductos from "./data/productos";

export default function App() {
  return (
  <>  
    <Caja class="content">
      {dataProductos.map(({id, nombre, precio, stock}) => (
        <Productos
          key = {id} 
          nombre = {nombre}
          precio = {precio}
          stock = {stock}
        />
      ))}
    </Caja>

    <Caja class="content">
      <Contador/>
    </Caja>
  </>
  );
}
