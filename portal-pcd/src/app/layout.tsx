import type { Metadata, Viewport } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";

export const viewport:Viewport = {
    initialScale: 1,
    width: "device-width",
    maximumScale: 1,
    minimumScale: 1,
}

export const metadata: Metadata = {
  title: "projeto-pcd",
  description: "projeto acessibilidade para pessoas pcd",
  authors: [{name:"Renato Bezerra | RM560928"},{name:"Felipe Carlos | RM559476"},{name:"Jhonatan Torres| RM560601"}],
  applicationName: "Aula 17",
 
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="pt-br">

      <body>
        <Cabecalho  tituloPagina={"COMPONENTES"} mensagem={"ENVIADA"}  />
        <div className=".meu-container min-h-[60vh] w-[100vw]" >
          {children}
        </div>
        <Rodape />
      </body>
    </html> 
  );
}
