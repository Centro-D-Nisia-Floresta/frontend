import {GithubLogo, UsersThree } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="m-6">
                <div className="flex justify-between items-center bg-white text-black py-1 px-4 mx-10">
                    <p className="text-xl font-bold flex-1">Centro D. Nísia Floresta</p>

                    <div className="flex-2 flex justify-center">
                    <p className="pt-3">© 2024 CDNF | Projeto Integrador - ODS 5</p>
                    
                    </div>

                    <div className="flex-1 flex justify-end gap-3">
                        <a target="_blank" href="https://github.com/Centro-D-Nisia-Floresta">
                            <GithubLogo size={30} weight="regular" />
                        </a>
                        <a target="_blank" href="cdnisiafloresta@gmail.com">
                            <UsersThree size={30} weight="regular" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-3 pb-[-50px]">
                    <hr className="border-black w-[26%] justify-center mt-3" />
                </div>
            </div>
        </>
    )
}



{/* <div className="w-full p-2 flex justify-around">
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
            </div> */}