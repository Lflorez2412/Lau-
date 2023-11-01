//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from "react"

function Card({ nombre, animal }) {
  return (
    <div className="card">
      <p>Hola { nombre }!</p>
      <p>Sabemos que tu animal preferido es:</p>
      <p>{ animal }</p>
    </div>
  );
}

export default Card;
