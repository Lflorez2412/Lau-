import React, { useState } from 'react'
import Card from './Card';
import './App.css';

function App() {

  //Aqui deberias agregar los estados y los handlers para los inputs

  const [nombre, setNombre] = useState("");
  const [animal, setAnimal] = useState("");
  const [error, setError] = useState("");
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const handleSubmit = e => {
      e.preventDefault();
      
      if (nombre.length < 3 || nombre.startsWith(" ") || animal.length < 6) {
          setError("Por favor chequea que la información sea correcta");
          setMostrarDatos(false); 
      } else {
          setError("")
          setMostrarDatos (true);                
      }    
        
  };    

  
return (
  <div>

      <h2>Elige un animal</h2>

      <form
          onSubmit={handleSubmit}
      >
      
      <label htmlFor='nombre'>Nombre: </label>
      <input
          type='text'
          placeholder='Ingresar Nombre'
          value={nombre}
          onChange={e =>setNombre(e.target.value)}
      />
      
      <label htmlFor='animal'>Animal Preferido: </label>
      <input
          type='text'
          placeholder='Ingresar Animal Preferido'
          value={animal}
          onChange={e =>setAnimal(e.target.value)}
      />

      <input
          type="submit"
          value="ENVIAR"
      />
                          
  </form>

  {error && <p>{error}</p>}
  {mostrarDatos && <Card nombre = { nombre } animal = { animal }/>}

  </div>
);
}

export default App;
