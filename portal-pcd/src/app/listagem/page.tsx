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
        
        <div>
          <p>Serviços de Saúde e Reabilitação</p>
          <p>Benefícios e Direitos</p>
          <p>Emprego e Profissionalização</p>
          <p>Educação Inclusiva</p>
          <p>Acessibilidade Urbana e Mobilidade</p>
          <p>Comunidades e Apoio Psicológico</p>
          <p>Produtos e Tecnologia Assistiva</p>
          <p>Denúncias e Reclamações</p>
        </div>
        

    </main>
  )
}
