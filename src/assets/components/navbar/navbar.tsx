function Navbar () {
    return (
        <>
        <div className="w-full bg-sky-900 text-white flex justify-center py-4">

            <div className="container flex justify-between text-lg">

                <div className="text-2xl font-bold uppercase">Centro D. Nisia Floresta</div>

                <div className='flex gap-4'>

                    <div className='hover:underline'>Cursos</div>
                    <div className='hover:underline'>Cadastrar</div>
                    <div className='hover:underline'>Sobre</div>
                    <div className='hover:underline'>Contato</div>
                    <div className='hover:underline'>Perfil</div>
                    <div className='hover:underline'>Sair</div>

                </div>


            </div>

        </div>
        </>
    )
}
export default Navbar