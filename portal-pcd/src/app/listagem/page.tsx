import { isUserLoggedIn } from '@/lib/auth';
import { redirect } from 'next/navigation';

import React from 'react'

export default async function ListagemPage() {


    const loggedIn = await isUserLoggedIn();

    if(!loggedIn){
        redirect("/login");
    }
    
  return (
    <main style={{padding:'2rem'}}>
        <h1>Bem Vindo ao DashBoard</h1>
        <p>Esta página é protegida por Login!</p>
        
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
          <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Serviços de Saúde e Reabilitação</p>
          </a>
          <a href="https://www.gov.br/inss/pt-br/assuntos/beneficios" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Benefícios e Direitos</p>
          </a>
          <a href="https://empregabrasil.mte.gov.br/" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Emprego e Profissionalização</p>
          </a>
          <a href="https://www.gov.br/mec/pt-br" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Educação Inclusiva</p>
          </a>
          <a href="https://www.ctpsdigital.gov.br/acessibilidade" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Acessibilidade Urbana e Mobilidade</p>
          </a>
          <a href="https://www.cvv.org.br/" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Comunidades e Apoio Psicológico</p>
          </a>
          <a href="https://assistiva.org.br/" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Produtos e Tecnologia Assistiva</p>
          </a>
          <a href="https://www.gov.br/mdh/pt-br/ondh/denuncias" target="_blank" rel="noopener noreferrer">
            <p className="text-center text-lg mb-3 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">Denúncias e Reclamações</p>
          </a>
      </div>
        

    </main>
  )
}
