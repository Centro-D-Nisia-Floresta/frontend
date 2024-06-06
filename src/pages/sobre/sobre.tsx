import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Sobre() {
    return (
        <>
            <div className="grid grid-row-2 gap-5 bg-teal-200">
                <div className="grid grid-cols-2 m-5 items-center justify-center">
                    <div className="flex items-center justify-center">
                        <img src="https://ik.imagekit.io/rx2wvtnsm/6.png?updatedAt=1717597758631" className="w-2/3" alt="Logo" />
                    </div>
                    <div className="flex flex-col gap-2 p-5 bg-teal-200">
                        <h1 className="text-black text-5xl font-bold pb-3 pt-3">Sobre nosso projeto</h1>
                        <p className="text-xl">Somos o Centro de Desenvolvimento Nísia Floresta, e nosso projeto busca promover a igualdade de gênero e empoderar mulheres e meninas. Utilizando a tecnologia, queremos enfrentar os desafios do mercado de trabalho, identificando barreiras e promovendo oportunidades justas. Através da nossa aplicação, ofereceremos recursos educacionais, mentoria e palestras, contribuindo para o crescimento pessoal e profissional das mulheres. Nosso objetivo é criar um ambiente mais inclusivo, onde todas tenham as mesmas chances de sucesso.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="border-teal-700 w-2/3 mt-3"/>
                </div>
                <h2 className="text-black text-5xl font-bold pt-7 pl-24">Integrantes</h2>
                <div className="grid grid-cols-3 gap-2 bg-teal-200 m-10">
                    <div className="flex m-4 gap-4" id="Beatriz">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/beatriz500.png?updatedAt=1717691216053" className="rounded-2xl" alt="Imagem Beatriz" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Beatriz Alves</h3>
                            <p>Amante de animes, livros, games, música, tecnologia e cultura geek.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/beatrizalsilva/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/beatrizalsilva"><GithubLogo size={32} weight="light" /></a>
                                <a href="alvesbeatriz148@gmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex m-4 gap-4" id="Christian">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/christian500.png?updatedAt=1717691736016" className="rounded-2xl" alt="Imagem Christian" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Christian Alvim</h3>
                            <p>Amante de animes, livros, games, música, tecnologia e cultura geek.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/christian-a-8a4084137/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/christianfelps"><GithubLogo size={32} weight="light" /></a>
                                <a href="christianfelipialvim@gmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex m-4 gap-4" id="Ingrid">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/ingrid500.png?updatedAt=1717691736200" className="rounded-2xl" alt="Imagem Ingrid" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Ingrid Dias</h3>
                            <p>Amante de animes, livros, games, música, tecnologia e cultura geek.</p>
                            <div className="flex gap-2">
                                <a href="www.linkedin.com/in/ingrid-dias-souza"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/ingrid-dias"><GithubLogo size={32} weight="light" /></a>
                                <a href="dias.ingridsouza@gmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-4 gap-4" id="Lucas">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/lucas500.png?updatedAt=1717693448809" className="rounded-2xl" alt="Imagem Lucas" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Lucas Cardoso</h3>
                            <p>Guitarrista, fascinado por música, literatura, e cinema!.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/lucas-henrique-ferreira-cardoso-/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/lucashfcardoso"><GithubLogo size={32} weight="light" /></a>
                                <a href="lucashfcardoso@gmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex m-4 gap-4" id="Marcelo">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/marcelo500.png?updatedAt=1717691735980" className="rounded-2xl" alt="Imagem Marcelo" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Marcelo Henrique</h3>
                            <p>Curioso, criativo e atento. Apaixonado por cinema, música e gatos.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/marcelohsoares/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/Marshel0"><GithubLogo size={32} weight="light" /></a>
                                <a href="mah_henrique4478@hotmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex m-4 gap-4" id="Milena">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/milena500.png?updatedAt=1717691735278" className="rounded-2xl" alt="Imagem Milena" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Milena Semanaka</h3>
                            <p>Amante de animes, livros, games, música, tecnologia e cultura geek.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/msemanaka/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/msemanaka"><GithubLogo size={32} weight="light" /></a>
                                <a href="milena.sforte@gmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="flex m-4 gap-4" id="Pamela">
                        <div>
                            <img src="https://ik.imagekit.io/rx2wvtnsm/Sobre%20n%C3%B3s/pamela500.png?updatedAt=1717691735754" className="rounded-2xl" alt="Imagem Pamela" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="my-px text-2xl font-semibold">Pamela Rodrigues</h3>
                            <p>Praticante de yoga, adepta ao DIY, gatos e tecnologia.</p>
                            <div className="flex gap-2">
                                <a href="https://www.linkedin.com/in/pamelarodriguesqueiroz/"><LinkedinLogo size={32} weight="light" /></a>
                                <a href="https://github.com/PamelaZuni"><GithubLogo size={32} weight="light" /></a>
                                <a href="p.pml@hotmail.com"><Envelope size={32} weight="light" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sobre
