import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer () {
return (
    <>
    <div className="flex justify-center bg-cyan-900 text-white">

        <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">Centro D. Nisia Floresta</p>
            <p className="text-lg">Visite nossas redes sociais</p>

            <div className="flex gap-2">
                <LinkedinLogo size={48} weight="bold"/>
                <GithubLogo size={48} weight="bold"/>
                <Envelope size={48} weight="bold"/>

            </div>

        </div>

    </div>
    </>
)
}
export default Footer