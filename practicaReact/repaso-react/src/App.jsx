import Dato from "./components/Dato";
import Saludar from "./components/saludo";

function App(){
  return <>
  <h1>Hola</h1>
  <p>Esto es una oración</p>
  <Saludar nombre = "Joao"/>
  <Dato>
    <h4>Dirección:</h4>
    <h4>Estado Civil:</h4>
    <h4>Descripcion:</h4>
  </Dato>
  </>;
}

export default App;