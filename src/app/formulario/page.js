'use client'
import { useState } from "react";
import Button from 'react'
import react from "react";
import Link from "next/link";
import Image from "next/image";

const Formulario = () => {
  const [sexo, setSexo] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [fumante, setFumante] = useState("");
  const [atividadeFisica, setAtividadeFisica] = useState("");
  const [frutas, setFrutas] = useState("");
  const [legumes, setLegumes] = useState("");
  const [dificuldadeEscadas, setDificuldadeEscadas] = useState("");
  const [concluido, setConcluido] = useState(false);

  const handleConcluir = () => {
    
    if (sexo && idade && peso && altura && fumante && atividadeFisica && frutas && legumes && dificuldadeEscadas) {
      setConcluido(true);
    } else {
      setConcluido(false);
    }
  };

  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Preencha os campos abaixo:</h1>

      <label className="mb-4">
        1- Selecione seu sexo:
        
        <div className="flex items-center" >
          <input
            type="checkbox"
            value="feminino"
            checked={sexo === "feminino"}
            onChange={() => setSexo("feminino")}
          />
          Feminino
        </div>
        <div className="flex items-center" >
          <input
            type="checkbox"
            value="masculino"
            checked={sexo === "masculino"}
            onChange={() => setSexo("masculino")}
          />
          Masculino
        </div>
      </label>
      <br></br>
      <label>
        2- Digite sua idade:
        <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
      </label>
      <br></br>
      <label>
        3- Digite seu peso:
        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <br></br>
      <label>
        4- Digite sua altura:
        <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <br></br>
      <label>
        5- Você é fumante?
        <div>
          <input
            type="checkbox"
            value="sim"
            checked={fumante === "sim"}
            onChange={() => setFumante("sim")}
          />
          Sim
        </div>
        <div>
          <input
            type="checkbox"
            value="nao"
            checked={fumante === "nao"}
            onChange={() => setFumante("nao")}
          />
          Não
        </div>
      </label>
      <br></br>
      <label>
        6- Você faz atividades físicas com frequência?
        <div>
          <input
            type="checkbox"
            value="sim"
            checked={atividadeFisica === "sim"}
            onChange={() => setAtividadeFisica("sim")}
          />
          Sim
        </div>
        <div>
          <input
            type="checkbox"
            value="nao"
            checked={atividadeFisica === "nao"}
            onChange={() => setAtividadeFisica("nao")}
          />
          Não
        </div>
      </label>
      <br></br>
      <label>
        7- Você consome frutas com frequência?
        <div>
          <input
            type="checkbox"
            value="sim"
            checked={frutas === "sim"}
            onChange={() => setFrutas("sim")}
          />
          Sim
        </div>
        <div>
          <input
            type="checkbox"
            value="nao"
            checked={frutas === "nao"}
            onChange={() => setFrutas("nao")}
          />
          Não
        </div>
      </label>
      <br></br>
      <label>
        8- Você consome legumes com frequência?
        <div>
          <input
            type="checkbox"
            value="sim"
            checked={legumes === "sim"}
            onChange={() => setLegumes("sim")}
          />
          Sim
        </div>
        <div>
          <input
            type="checkbox"
            value="nao"
            checked={legumes === "nao"}
            onChange={() => setLegumes("nao")}
          />
          Não
        </div>
      </label>
      <br></br>
      <label>
        9- Você tem dificuldade de subir escadas?
        <div>
          <input
            type="checkbox"
            value="sim"
            checked={dificuldadeEscadas === "sim"}
            onChange={() => setDificuldadeEscadas("sim")}
          />
          Sim
        </div>
        <div>
          <input
            type="checkbox"
            value="nao"
            checked={dificuldadeEscadas === "nao"}
            onChange={() => setDificuldadeEscadas("nao")}
          />
          Não
        </div>
      </label>
      <br></br>
      <button
        className={`mt-4 p-2 text-white ${
          concluido ? "bg-blue-500" : "bg-gray-500 cursor-not-allowed"
        }`}
        onClick={handleConcluir}
        disabled={!concluido}
      >
        CONCLUIR
      </button>
    </main>
  );
};

export default Formulario;

