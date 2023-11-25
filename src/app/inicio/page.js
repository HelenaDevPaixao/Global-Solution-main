'use client'
import { useState } from "react";
import react from "react";
import Link from "next/link";


const Inicio = () => {
  const footerStyle = {
    backgroundColor: "#3498db",  
    color: "#fff",  
    padding: "20px",  
  };
 return(

  
  <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold" }}>PRÉ CONSULTA DIGITAL</h1>
      <br></br>
      <p>
        O diabetes é uma doença crônica que ocorre quando o corpo não consegue produzir ou usar a insulina de forma eficaz. A insulina é um hormônio produzido pelo pâncreas que ajuda o corpo a usar a glicose (açúcar) para produzir energia. Quando os níveis de glicose no sangue estão elevados, ocorre a hiperglicemia, que é um dos principais sintomas do diabetes.
        Tipos de diabetes
        Existem dois principais tipos de diabetes:
        Diabetes tipo 1: ocorre quando o pâncreas não produz insulina. Essa forma de diabetes é geralmente diagnosticada na infância ou adolescência.
        Diabetes tipo 2: ocorre quando o corpo não consegue usar a insulina de forma eficaz. Essa forma de diabetes é mais comum em adultos, mas também pode ser diagnosticada em crianças e adolescentes.
        Riscos do diabetes
        O diabetes pode aumentar o risco de uma série de complicações, incluindo:
        Doenças cardíacas, Doenças vasculares periféricas, Doenças renais, Doenças oculares, Doenças neurológicas, Doenças dentárias.
        Sintomas do diabetes
        Os sintomas do diabetes podem variar de pessoa para pessoa e podem ser leves ou graves. Os sintomas mais comuns incluem:
        Aumento da sede,
        Aumento da vontade de urinar,
        Perda de peso sem causa aparente,
        Cansaço,
        Fome,
        Visão turva,
        Infecções frequentes,
        Diagnóstico do diabetes.
        O diagnóstico do diabetes é feito por meio de exames de sangue, como a glicemia em jejum, a glicemia pós-prandial e o teste de tolerância à glicose.
        O tratamento do diabetes varia de acordo com o tipo da doença. O objetivo do tratamento é manter os níveis de glicose no sangue dentro da faixa normal para prevenir complicações.
        Fazer atividade física regularmente
        Evitar o consumo excessivo de açúcar e gorduras saturadas
        Segundo dados do Ministério da Saúde, o diabetes é a doença crônica mais comum no Brasil. Em 2020, havia cerca de 16,8 milhões de pessoas com diabetes no país, o que representa 9,9% da população.
        A estimativa é que o número de pessoas com diabetes no Brasil aumente para 25,6 milhões em 2030.
        Conclusão
      </p>
      <br>
      </br>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" style={{ padding: "10px", fontSize: "16px", marginTop: "20px" }}>
      <Link href="/formulario">
            Faça seu teste
          </Link>
      </button>
      <br></br>
      <br></br>
      <footer style={footerStyle}>
      <hr style={{ borderColor: "#fff" }} /> {/* Linha horizontal com cor branca */}
      <p>Helena Lopes da Paixao e Santos - RM550929 - 1TDSPN - Project Owner</p>
      <hr style={{ borderColor: "#fff" }} />
      <p>Yasmin Araujo Santos Lopes - RM552314 - 1TDSPN - Scrum Master</p>
      <hr style={{ borderColor: "#fff" }} />
      <p>Paulo Barbosa Neto - RM550323 - 1TDSPN - Dev</p>
      <hr style={{ borderColor: "#fff" }} />
      <p>Cassio Yuji Hirassike - RM551491 - 1TDSPN - Dev</p>
      <hr style={{ borderColor: "#fff" }} />
      <p>Allef Santos - RM550341 - 1TDSPN - Dev</p>
      <hr style={{ borderColor: "#fff" }} />
    </footer>
      

    
      
  </div>

 );
};


export default Inicio;