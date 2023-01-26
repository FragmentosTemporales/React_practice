import './App.css';

function Person (props){
  return(
    <div className="person" style={{
      backgroundColor:props.color
    }}>
      <h3>Nombre: {props.nombre} </h3>
      <p>Edad: {props.edad}</p>
    </div>
  )
}

function App(){
  return(
    <div className="App">
      <h1>Hola Mundo</h1>
      <Person nombre="Pedro" edad="25" color="red"/>
      <Person nombre="José" edad="30" color="blue"/>
      <Person nombre="Alejandro" edad="35" color="green"/>
    </div>
  )
}
export default App;