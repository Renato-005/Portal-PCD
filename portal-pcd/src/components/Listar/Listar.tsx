"use client";
import { listaDeUsuarios } from '@/data/listaDeUsuarios';
import { TipoUsuario } from '@/types/TipoUsuario';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Listar() {

    const [listaUsuarios, setlistaUsuarios] = useState<TipoUsuario[]>()

    useEffect(() => {
        if (!localStorage.getItem("listaUsuarios")) {
            localStorage.setItem("listaUsuarios", JSON.stringify(listaDeUsuarios));
        }

        setlistaUsuarios(JSON.parse(localStorage.getItem("listaUsuarios") || "[]"))
    }, []);

    return (
        <div>
            <h1>Listagem dos usuários:</h1>

            <table className='min-w-full text-left border border-gray-300 rounded-2xl'>
                <thead className='bg-gray-200 text-gray-700'>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuarios?.map((usuario,indice) =>(
                        <tr key={indice} className='hover:bg-gray-100 cursor-pointer transition-colors even:bg-white odd:bg-gray-150'>
                            <td className='px-4 py-2 border-b'>{usuario.id}</td>
                            <td className='px-4 py-2 border-b'>{usuario.nome}</td>
                            <td className='px-4 py-2 border-b'>{usuario.email}</td>
                            <td className='px-4 py-2 border-b'> <Link href={`/editar/${usuario.id}`}>EDITAR</Link> | EXCLUIR
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Quantidade de usuários: {listaUsuarios?.length}</td>
                    </tr>
                </tfoot>
            </table>


        </div>
    )
}
