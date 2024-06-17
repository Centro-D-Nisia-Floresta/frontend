import { GithubLogo, UsersThree } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="w-full p-2 flex justify-around bg-gradient-to-r from-fuchsia-400 to-bright-turquoise-300">
                <div className="flex justify-start flex-col p-2">
                    <Link to="/home">
                        <span id="logo" className="uppercase font-semibold">Nísia Floresta</span>
                    </Link>
                    <p className="text-md italic">Acreditamos que a educação transforma vidas!</p>
                    <p className="text-sm">2024 | Projeto Integrador - ODS 5</p>
                </div>

                <div className="p-2">
                    <p>Nos siga para acompanhar as novidades:</p>
                    <div className="flex gap-3 justify-center">
                        <a href="https://github.com/Centro-D-Nisia-Floresta" target="_blank" className="hover:text-fuchsia-500">
                            <GithubLogo size={30} weight="light" />
                        </a>
                        <a href="#" target="_blanck" className="hover:text-fuchsia-500">
                            <UsersThree size={30} weight="light" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}