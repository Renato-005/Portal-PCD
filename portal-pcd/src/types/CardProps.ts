interface User {
    nome: string;
    idade: number;
    email: string;
   }

export type CardProps = {
    titulo:string,
    imagem:string,
    descImg:string,
    descCard:string,
    click:(txt:string)=>void,
    isActive: true | false;
    children: React.ReactNode;
    usuario: User
  }
  