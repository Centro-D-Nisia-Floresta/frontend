import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center bg-teal-600 text-white items-center py-4 px-4">
                <div className="container flex justify-around items-center py-4">
                    <p className="text-xl font-bold">Centro D. Nisia Floresta</p>

                    <p>© 2024 CDNF | Todos os direitos reservados.</p>

                    <div className="flex gap-2">

                        <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta"><LinkedinLogo size={36} weight="bold" /> {/* Colocar âncora para Linkedin */}
                        </a>
                        <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta"><GithubLogo size={36} weight="bold" />
                        </a>
                        <a target="_blank" href=""><Envelope size={36} weight="bold" />  {/* Colocar âncora para email */}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer