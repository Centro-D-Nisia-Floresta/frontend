function Contato () {
    return (
        <>

        <section className="flex justify-center items-center gap-3"id="contato">

           <div className="container mx-auto p-4 flex flex-col justify-center items-center"> 
                <h1>Contato</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit rerum fuga aut illum accusantium distinctio sunt, veniam mollitia vel eius id laudantium facilis. Aliquam ipsam fugit porro dolores facilis!</p>
            </div>

            <form className="flex justify-center items-center flex-col w-2/3 gap-3">
        
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Nome" className="border-2 border-slate-700 rounded p-2"   />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="border-2 border-slate-700 rounded p-2" />

                <label htmlFor="assunto">Assunto</label>
                <input type="text" name="assunto" id="assunto" placeholder="Assunto" className="border-2 border-slate-700 rounded p-2" />

                <label htmlFor="mensagem">Mensagem</label>
                <input type="text" name="mensagem" id="mensagem" placeholder="Mensagem" className="border-2 border-slate-700 rounded p-2"  />

                <button type="submit" className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2">Enviar</button>

            </form>

        </section>
        </>
    )
}
export default Contato