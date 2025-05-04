import React from 'react'
import { CardProps } from '@/types/CardProps'

export default function Card(props:CardProps) {
  return (
    <div>
        <h2>{props.titulo}</h2>
        <figure>
            <img src={props.imagem} alt={props.descImg} />
            <figcaption>{props.descCard}</figcaption>
        </figure>
        <button onClick={()=> props.click(`Mensagem do usuário: ${props.usuario.nome} `)}>Descrição da Imagem</button>
        <p>Status: {props.isActive ? "Ativo" : "Inativo"}</p>
        <p>By:{props.usuario.email}</p>
        <div>
            {props.children}
        </div>
    </div>
  )
}
