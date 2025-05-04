"use client";
import { listaDeUsuarios } from "@/data/listaDeUsuarios";
import { loginUser } from "@/lib/auth";
import { TipoUsuario } from "@/types/TipoUsuario";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Editar({id}:{id:string}) {

  const navigate = useRouter();

  const [listaUsuarios, setlistaUsuarios] = useState<TipoUsuario[]>()
  
  const [usuario, setUsuario] = useState<TipoUsuario>({
    id: 0,
    nome: "",
    email: "",
    senha: ""
  });

  useEffect(() => {

    if(!localStorage.getItem("listaUsuarios")){
      localStorage.setItem("listaUsuarios", JSON.stringify(listaDeUsuarios));
    }
  
    setlistaUsuarios(JSON.parse(localStorage.getItem("listaUsuarios") || "[]"))

    const lista = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");

    const usuarioEncontrado = lista.find((u:TipoUsuario)=> u.id == Number(id));

    if(usuarioEncontrado){
      setUsuario(usuarioEncontrado);
    }

  }, [id]);





  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
      const {name,value} = e.target;
      setUsuario({...usuario, [name]: value});
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (listaUsuarios != undefined) {

      for (let x = 0; x < listaUsuarios.length; x++) {
        if (listaUsuarios[x].email === usuario.email && listaUsuarios[x].senha === usuario.senha) {
          // alert("Usuário validado com sucesso!");
          loginUser("abc-123");
          navigate.push("/");
          return;
        }
      }
    }

    alert("Usuário ou senha inválidos!");
    navigate.push("/erro")
  }

  return (
    <div>

      <form onSubmit={handleSubmit} className="form-login">
        <fieldset>
          <legend>ATUALIZAR</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              required
              placeholder="Digite seu email"
              value={usuario.nome}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              required
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={(e) => handleChange(e) }
            />
          </div>
          <div>
            <button type="submit" id="submit">
              Atualizar
            </button>
          </div>
        </fieldset>
      </form>

    </div>
  );
}
