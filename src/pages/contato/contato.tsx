import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";


function Contato() {

    const { isLoading } = useContext(AuthContext);

    return (

        <>
            <div className=" flex h-screen items-center justify-center font-bold">
                { }

                <div className="bg-white rounded-xl w-2/3 shadow-2xl py-10">
                    <form className="flex justify-center items-center flex-col gap-4 py-4 px-10">
                        <h2 className="text-black text-4xl pb-6 pt-3 text-center">Quer saber mais sobre nossos produtos ou tem alguma sugestão?</h2>
                        <p className="text-2xl">Mande uma mensagem:</p>

                        <div className="flex flex-col w-2/3">
                            <label htmlFor="usuario">Nome*</label>
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" className="border-2 border-fuchsia-900 rounded p-2" required/>
                        </div>


                        <div className="flex flex-col w-2/3">
                            <label htmlFor="usuario">Email*</label>
                            <input type="text" id="usuario" name="usuario" placeholder="exemplo@email.com" className="border-2 border-fuchsia-900 rounded p-2" required/>
                        </div>

                        <div className="flex flex-col w-2/3">
                            <label htmlFor="usuario">Assunto*</label>
                            <input type="text" id="assunto" name="assunto" placeholder="Digite o assunto" className="border-2 border-fuchsia-900 rounded p-2" required/>
                        </div>

                        <div className="flex flex-col w-2/3">
                            <label htmlFor="senha">Mensagem*</label>
                            <textarea name="message" id="message" placeholder="Digite sua mensagem" className="border-2 border-fuchsia-900 rounded p-2" required></textarea>
                            {/* <input type="text" id="mensagem" name="mensagem" placeholder="Digite sua mensagem" className="border-2 border-fuchsia-900 700 rounded p-2" /> */}
                        </div>

                        <button type="submit" className="flex items-center justify-center rounded bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white w-1/3 py-2">
                            {" "}
                            { }
                            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Enviar</span>}
                        </button>

                    </form>

                </div>

                <div className="fundoLogin hidden lg:block"></div>
            </div>

        </>
    )
}
export default Contato

{/* <div className="container mx-auto p-4 flex flex-col justify-center items-center"> 
     <h1>Contato</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias natus omnis modi, ipsa aliquid mollitia debitis sit minima? Amet similique harum eos doloribus? Sapiente delectus velit.</p>
</div> nome/ email/ assunto/ mensagem*/}