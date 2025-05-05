import Image from "next/image";

//Exemplo de criação de componente
export default function Index(){

  //Área imperativa
  const nomeCurso = "1TDS";
  const nomeAluno = "José das Couve";

  return( 
    //Área declarativa
    <div>
      <h1>ROTA</h1>
      <div>
        <p>Nome do curso: {nomeCurso}</p>
        <p>Nome do aluno : {nomeAluno}</p>
        <Image src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*_bJ2z2NRfTncHAv5UjUxwA.jpeg" alt="Logo" width={200} height={200} />
      </div>
 
    </div>
  );
}