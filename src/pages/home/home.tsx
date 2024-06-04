import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-teal-100 flex justify-center">

        <div className="container grid grid-cols-2">

          <div className="flex flex-col text-5xl font-bold py-5 justify-around m-10">
            <h1 className="text-black relative w-fit text-balance font-bold !leading-tight ">Centro de Desenvolvimento {' '}
              <span className="bg-fuchsia-900 text-white">Nísia Floresta</span>{' '}</h1>
          </div>

          <div className="flex items-center py-5 justify-around m-10 text-xl">
            <p>Oferecemos cursos e palestras para capacitar mulheres e abrir portas no mercado de trabalho. Juntos, promovemos a igualdade de gênero e construímos um futuro mais justo.</p>
          </div>
        </div>

      </div>

      <div className="bg-teal-500 flex justify-center min-h-[80vh]">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center gap-4 justify-center py-4">
            <p className="text-xl"> Tagline </p>
            <h2 className="text-5xl font-bold"> Medium length section heading goes here </h2>
            <p className="text-xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
            <div className="flex justify-around gap-4 pt-6">
              <div className="flex flex-col justify-around gap-4 items-center">
                <h2 className="text-5xl font-bold">50%</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="flex flex-col justify-around gap-4 items-center">
                <h2 className="text-5xl font-bold">50%</h2>
                <p className="text-xl">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-6">
              <p className="text-xl">Conheça mais sobre nosso projeto e nosso time.</p>
            </div>
            <Link to="/sobre"><button className='font-bold rounded px-4 py-2 bg-fuchsia-900 hover:bg-teal-100 text-xl hover:text-fuchsia-800 hover:duration-500'>Sobre nós</button></Link>
          </div>

          <div className="flex justify-center">
            <img src="http://i.imgur.com/VpwApCU.png"
              alt="Imagem Home" className="w-2/3" /> {/* Definir a imagem da home */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
