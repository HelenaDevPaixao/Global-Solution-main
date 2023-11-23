'use client'
import { useState } from "react";
import react from "react";
import Link from "next/link";
import Image from "next/image";

const Inicio = () => {
 return(
  <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold" }}>PRÉ CONSULTA DIGITAL</h1>
      <br></br>
      <p>
        O Grupo DaVinci Code lidera a inovação em saúde digital. Desenvolvemos
        uma solução que, de maneira eficiente, ajuda as pessoas a compreenderem
        seus hábitos de saúde e determinarem a predisposição à diabetes. Nosso
        compromisso é capacitar indivíduos por meio de informações acessíveis e
        práticas, promovendo escolhas saudáveis. Junte-se a nós nessa missão de
        bem-estar e prevenção. A ênfase na praticidade e na acessibilidade
        reflete o compromisso do Grupo DaVinci Code em tornar informações
        valiosas sobre saúde acessíveis a todos. Estamos dedicados em contribuir
        positivamente para a promoção da saúde e bem-estar da comunidade.
      </p>
      <br>
      </br>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" style={{ padding: "10px", fontSize: "16px", marginTop: "20px" }}>
      <Link href="/formulario">
            Faça seu teste
          </Link>
      </button>
  </div>

 );
};


export default Inicio;