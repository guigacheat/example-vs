import React from "react";
import "./Card.js"; // Estilos para o card

function Card({ nome, nota1, nota2, status }) {
  return (
    <div className={`card ${status}`}>
      <h2>{nome}</h2>
      <p>Nota 1: {nota1}</p>
      <p>Nota 2: {nota2}</p>
      <p className={status}>
        {status === "aprovado" ? "Aprovado" : "Reprovado"}
      </p>
    </div>
  );
}

export default Card;
