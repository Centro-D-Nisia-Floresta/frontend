import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <div className="bg-teal-100 flex justify-center">

        <div className="container grid grid-cols-2 ">

<<<<<<< HEAD
          <div className="flex flex-col text-5xl font-bold py-5 justify-around m-10">
            <h1 className="text-black relative w-fit text-balance font-bold !leading-tight ">Centro de Desenvolvimento {' '}
              <span className="bg-bright-turquoise-600 text-white hover:bg-brigt-400 font-bold hover:text-white">Nísia Floresta</span>{' '}</h1>
=======
          <div className="flex flex-col text-5xl font-bold py-10 pl-16 justify-around mr-[69px]">
            <h1 className="text-black relative w-fit text-balance font-bold !leading-tight">Centro de Desenvolvimento {' '}
              <span className="bg-fuchsia-800 text-white font-bold ">Nísia Floresta</span>{' '}</h1>
>>>>>>> fcf2208d18f1cd28bdafdd2403f9b20f6742e7a2
          </div>

          <div className="flex items-center py-10 pl-18 justify-around m-10 text-xl ">
            <p>Capacite-se conosco e transforme sua vida! Participe de nossos cursos e palestras, projetados para empoderar mulheres e abrir portas no mercado de trabalho. 
              Juntos, vamos promover a igualdade de gênero e construir um futuro mais justo. Alcance seu potencial máximo e contribua para um mundo melhor. Venha fazer parte dessa transformação!</p>
          </div>
          
          <div><hr className="border-teal-700 w-[1540px] mt-3 mb-3"/></div>
        </div>
        
      </div>


      <div className="bg-teal-100 flex justify-center ">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">

            <h2 className="text-5xl text-center font-bold text-black"> Capacite-se Conosco e Transforme Sua Vida! </h2>
            <p className="text-xl text-center text-black"> Participe de nossos cursos, palestras, workshops e mentorias projetados 
              para empoderar mulheres e abrir portas no mercado de trabalho. </p>

            <div className="flex flex-col gap-4 pt-6">
              <p className="text-xl text-black">Conheça mais sobre nossos serviços.</p>
            </div>
            <Link to="/servicos"><button className='font-bold rounded px-4 py-2 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Ver mais</button></Link>
          </div>

          <div className="flex justify-center ">
            <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Teamwork.png?updatedAt=1717618544997"
              alt="Imagem Home" className="w-2/3" /> {/* Definir a imagem da home */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
