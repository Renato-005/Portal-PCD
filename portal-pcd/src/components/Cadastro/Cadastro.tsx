"use client";
import { TipoUsuario } from '@/types/TipoUsuario';
import  { useState } from 'react'

export default function Cadastro() {

      const [usuario, setUsuario] = useState<TipoUsuario>({
        id: 0,
        nome: "",
        email: "",
        senha: ""
      });

      const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
          const {name,value} = e.target;
          setUsuario({...usuario, [name]: value});
      }

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");
        const novoUsuario = {
          id: listaUsuarios.length + 1,
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha
        };
        
        listaUsuarios.push(novoUsuario);

        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        alert("Usuário cadastrado com sucesso!");

        //Limpando os campos do form.
        setUsuario({
          id: 0,
          nome: "",
          email: "",
          senha: ""
        });
      }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form  onSubmit={handleSubmit} className="form-cadastro">
        <fieldset>
          <legend className="form-cadastro-legend">CADASTRO</legend>
          <div>
            <label htmlFor="nome" className="form-cadastro-label">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              placeholder="Digite seu nome"
              value={usuario.nome}
              onChange={(e) => handleChange(e)}
              className="form-cadastro-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="form-cadastro-label">Email</label>
            <input
              type="email"
              name="email"
              id="name"
              required
              placeholder="Digite seu email"
              value={usuario.email}
              onChange={(e) => handleChange(e)}
              className="form-cadastro-input"
            />
          </div>
          <div>
            <label htmlFor="senha" className="form-cadastro-label">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              required
              placeholder="Digite sua senha"
              value={usuario.senha}
              onChange={(e) => handleChange(e) }
              className="form-cadastro-input"
            />
          </div>
          <div>
            <button type="submit" id="submit" className="form-cadastro-button">
              Cadastrar
            </button>
          </div>
        </fieldset>
      </form>
    </div>

  )
}
