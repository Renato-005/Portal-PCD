import Link from "next/link";

export default function Menu() {
    return (
     <nav>
        <ul>
            <li>
                <Link href="/cadastro">Cadastrar</Link>
            </li>
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li>
                <Link href="/listagem">Listagem</Link>
            </li>
            <li>
                <Link href="/lista">Listar</Link>
            </li>
        </ul>
     </nav>
    );
}