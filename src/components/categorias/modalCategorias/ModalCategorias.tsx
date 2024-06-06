import { Link } from "react-router-dom"

function ModalCategorias() {
    return (
        <>
            <div className="grid grid-cols-2 items-center justify-center bg-teal-400">
                <div className="bg-teal-600 items-center rounded-lg justify-center m-20">
                    <div className="flex flex-col">
                        <h2 className="flex items-center justify-center font-semibold text-4xl pt-6" >Cursos</h2>
                        <p className="m-4 text-center">Está buscando ampliar seus conhecimentos e desenvolver novas habilidades, nossos cursos são perfeitos para você!</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="https://ik.imagekit.io/rx2wvtnsm/Imagens%20Categorias/cursosa.png?updatedAt=1717689970772" className="w-[400px]" alt="LOGO CURSOS" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="m-4 text-center">Oferecemos uma variedade de cursos em diversas áreas, com professores experientes e conteúdos atualizados.</h3>

                        <Link to="/servicos">
                            <button className='font-bold text-teal-100 rounded px-4 py-2 mb-7 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
                        </Link>
                    </div>
                </div>

                <div className="bg-teal-600 items-center rounded-lg justify-center m-20">
                    <div className="flex flex-col">
                        <h2 className="flex items-center justify-center font-semibold text-4xl pt-6" >Palestras</h2>
                        <p className="m-4 text-center">Quer se inspirar e obter insights de grandes profissionais? Nossas mentorias oferecem o suporte individual que você precisa.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="https://ik.imagekit.io/rx2wvtnsm/Imagens%20Categorias/palestrasa.png?updatedAt=1717689970662" className="w-[400px]" alt="LOGO CURSOS" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="m-4 text-center">Participe de nossas palestras e mantenha-se atualizado com as últimas tendências e melhores práticas do mercado.</h3>

                        <Link to="/servicos">
                            <button className='font-bold text-teal-100 rounded px-4 py-2 mb-7 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
                        </Link>
                    </div>
                </div>

                <div className="bg-teal-600 items-center rounded-lg justify-center m-20">
                    <div className="flex flex-col">
                        <h2 className="flex items-center justify-center font-semibold text-4xl pt-6" >Workshops</h2>
                        <p className="m-4 text-center">Nossos workshops são experiências imersivas, ideais para quem deseja aprender de forma prática e dinâmica.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="https://ik.imagekit.io/rx2wvtnsm/Imagens%20Categorias/workshopsa.png?updatedAt=1717689970981" className="w-[400px]" alt="LOGO CURSOS" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="m-4 text-center">Participe de nossos próximos workshops e adquira conhecimentos valiosos.</h3>

                        <Link to="/servicos">
                            <button className='font-bold text-teal-100 rounded px-4 py-2 mb-7 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
                        </Link>
                    </div>
                </div>

                <div className="bg-teal-600 items-center rounded-lg justify-center m-20">
                    <div className="flex flex-col">
                        <h2 className="flex items-center justify-center font-semibold text-4xl pt-6" >Mentorias</h2>
                        <p className="m-4 text-center">Precisa de orientação personalizada para alcançar seus objetivos? Nossas mentorias oferecem o suporte individual que você precisa.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <img src="https://ik.imagekit.io/rx2wvtnsm/Imagens%20Categorias/mentoriasa.png?updatedAt=1717689970979" className="w-[400px]" alt="LOGO CURSOS" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <h3 className="m-4 text-center">Inscreva-se para uma mentoria e acelere seu desenvolvimento profissional.</h3>

                        <Link to="/servicos">
                            <button className='font-bold text-teal-100 rounded px-4 py-2 mb-7 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
                        </Link>
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default ModalCategorias




/*<div className="grid grid-cols-2 items-center justify-center bg-teal-400">
    <!-- Cursos -->
    <div className="container bg-teal-400 items-center justify-center m-20">
        <div className="container flex flex-row items-center justify-start"> <!-- Alinhado para a esquerda -->
            <h2 className="flex font-semibold text-4xl">Cursos</h2>
            <p className="m-4">COLOCAR ALGUM TEXTO LEGALZINHO</p>
        </div>

        <div className="container flex flex-col items-center justify-center">
            <img src="https://placehold.co/1600x1000" className="w-[400px]" alt="LOGO CURSOS" />
        </div>

        <div className="container flex flex-col items-center justify-center mt-4">
            <h3>Oferecemos cursos super legais para você ser um super profissional</h3>

            <button className='font-bold text-teal-100 rounded m-4 px-4 py-2 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
        </div>
    </div>

    <!-- Palestras -->
    <div className="container bg-teal-400 items-center justify-center m-20">
        <div className="container flex flex-row items-center justify-end"> <!-- Alinhado para a direita -->
            <h2 className="flex font-semibold text-4xl">Palestras</h2>
            <p className="m-4">COLOCAR ALGUM TEXTO LEGALZINHO</p>
        </div>

        <div className="container flex flex-col items-center justify-center">
            <img src="https://placehold.co/1600x1000" className="w-[400px]" alt="LOGO CURSOS" />
        </div>

        <div className="container flex flex-col items-center justify-center mt-4">
            <h3>Oferecemos palestras super legais para você se tornar um super profissional</h3>

            <button className='font-bold text-teal-100 rounded m-4 px-4 py-2 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Veja mais</button>
        </div>
    </div>
</div>
*/
