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
  title: "portal-pcd",
  description: "cp de front - portal-pcd",
  authors: [{name:"Renato Bezerra | Felipe Carlos | Jhonatan Torres"}],
  applicationName: "CP",
 
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho tituloPagina="PORTAL PCD" mensagem="Bem vindos!"/>
        <div className="container min-h-[78vh]">
          {children}
        </div>
        <Rodape />
      </body>
    </html>
  );
}
