import Image from "next/image";
import imgPrincipal from "@/img/banner-index.jpg"


//Exemplo de criação de componente
export default function Index(){

  return( 
    //Área declarativa
    <div className="bg-blue-500 shadow-lg w-[100%] ">
         
      <Image className="inline-block" src={imgPrincipal} alt="Imagem Principal" />
 
 
    </div>
  );
}