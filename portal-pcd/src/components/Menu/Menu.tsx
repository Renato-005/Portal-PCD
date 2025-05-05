import Link from "next/link";

export default function Menu() {
    return (
        <nav className="mt-4">
          <ul className="flex gap-6 justify-center">
            <li>
              <Link href="/cadastro" className="text-gray-700 hover:text-gray-900 font-medium">
                Cadastrar
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                Login
              </Link>
            </li>
            <li>
              <Link href="/listagem" className="text-gray-700 hover:text-gray-900 font-medium">
                Listagem
              </Link>
            </li>
            <li>
              <Link href="/lista" className="text-gray-700 hover:text-gray-900 font-medium">
                Listar
              </Link>
            </li>
          </ul>
        </nav>
      );
    }