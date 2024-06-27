import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Contato() {
  return (
    <>
      <div className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100">
        <div className="p-7">
          <div className="flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-light pb-2">Quer saber mais sobre os nossos serviços?</h2>
            <form className="flex flex-col p-10 border rounded-md bg-white shadow-md shadow-fuchsia-950 w-[50%]">
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" placeholder="Nome" className="p-2 border border-gray-300 rounded-md" />

              <label htmlFor="assunto" className="mt-2">Assunto</label>
              <input type="text" name="assunto" placeholder="Dúvidas e sugestões" className="p-2 border border-gray-300 rounded-md" />

              <label htmlFor="email" className="mt-2">E-mail</label>
              <input type="text" name="email" placeholder="E-mail" className="p-2 border border-gray-300 rounded-md" />

              <label htmlFor="mensagem" className="mt-2">Mensagem</label>
              <textarea name="mensagem" placeholder="Digite sua mensagem ..." className="p-2 border border-gray-300 rounded-md" />

              <button className="rounded-md p-2 mt-3 text-center bg-fuchsia-950 text-white hover:bg-fuchsia-800 w-full hover:text-white">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}