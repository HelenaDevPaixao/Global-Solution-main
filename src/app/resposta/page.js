'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function ApiPage() {
  const [apiResult, setApiResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/");
        setApiResult(response.data); 
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setApiResult("Erro ao buscar dados da API");
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="centered-inputs">
        {apiResult ? (
          <div>
            <h2>Resposta da API:</h2>
            <p>{apiResult}</p> {}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
        <Link href="/">Voltar para a página inicial</Link>
      </div>
    </main>
  );
}