import React, { useState } from "react";
import "./Form.js"; // Arquivo de estilos

function Form({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nome, nota1, nota2 });
    setNome("");
    setNota1("");
    setNota2("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Nome do aluno"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 1"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Nota 2"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default Form;
