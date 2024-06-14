import { Envelope, GithubLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="m-6">
                <div className="flex justify-between items-center bg-white text-black py-1 px-4 mx-10 ">
                    <p className="text-xl font-bold flex-1">Centro D. Nísia Floresta</p>

                    <div className="flex-1 flex justify-center">
                        <Link to="/contato" className="hover:underline font-semibold">
                            Fale conosco
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-end gap-3">
                        <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta">
                            <GithubLogo size={36} weight="regular" />
                        </a>
                        <a target="_blank" href="cdnisiafloresta@gmail.com">
                            <Envelope size={36} weight="regular" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 pb-[-50px]">
                    <hr className="border-black w-[26%] justify-center mt-3" />
                    <p className="pt-3">© 2024 CDNF | Projeto Integrador - ODS 5</p>
                </div>
            </div>
        </>
    )
}
export default Footer