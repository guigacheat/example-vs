import React from "react";
import Card from "./components/Card"; // Certifique-se de que o caminho está correto
import Form from "./components/Form";
import "./styles.css"; // Arquivo de estilos

function App() {
  // Dados fixos para exibir os exemplos
  const alunos = [
    { nome: "João", nota1: 7, nota2: 8, status: "aprovado" },
    { nome: "Maria", nota1: 4, nota2: 3, status: "reprovado" },
  ];

  return (
    <div className="app">
      <h1>Cadastro de Alunos</h1>
      <Form />
      <div className="cards">
        {alunos.map((aluno, index) => (
          <Card
            key={index}
            nome={aluno.nome}
            nota1={aluno.nota1}
            nota2={aluno.nota2}
            status={aluno.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
