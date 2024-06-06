import { Envelope, GithubLogo} from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center bg-teal-600 text-white items-center py-1 px-4">
                <div className="container flex justify-around items-center py-4">
                    <p className="text-xl font-bold">Centro D. Nisia Floresta</p>
                    
                    <div className="flex flex-col items-center justify-center">
                        <Link to="/contato" className="hover:underline text-white font-semibold">
                        Fale conosco
                        </Link>
                        <hr className="border-white w-3/4 justify-center mt-3"/>   
                        <p className="pt-3">© 2024 CDNF | Todos os direitos reservados.</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-x font-semibold">

                        <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta"><GithubLogo size={36} weight="regular" />
                        </a>
                        <a target="_blank" href="cdnisiafloresta@gmail.com"><Envelope size={36} weight="regular" />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer