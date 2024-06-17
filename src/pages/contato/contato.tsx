import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Contato() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-medium p-2">Nisía Floresta</h2>
                    <p className="mb-5">Educação de qualidade para um futuro brilhante!</p>
                    <p className="text-md flex"><EnvelopeSimple size={26} weight="light" />cdnisiafloresta@gmail.com</p>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="mb-3 text-3xl font-medium p-2">Contate-nos</h2>
                    <form className="flex flex-col p-3 border border-gray-400 rounded-md">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Nome" className="p-2 border border-gray-300 rounded-md w-80" />

                        <label htmlFor="assunto" className="mt-2">Assunto</label>
                        <input type="text" name="assunto" placeholder="Dúvidas e sugestões" className="p-2 border border-gray-300 rounded-md w-80" />

                        <label htmlFor="email" className="mt-2">E-mail</label>
                        <input type="text" name="email" placeholder="E-mail" className="p-2 border border-gray-300 rounded-md w-80" />

                        <label htmlFor="mensagem" className="mt-2">Mensagem</label>
                        <input type="text" name="mensagem" placeholder="Digite sua mensagem ..." className="p-2 border border-gray-300 rounded-md w-80" />

                        <button className="rounded-md p-2 mt-3 text-center bg-bright-turquoise-500 hover:bg-bright-turquoise-600 w-full hover:text-white">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </>
    )
}