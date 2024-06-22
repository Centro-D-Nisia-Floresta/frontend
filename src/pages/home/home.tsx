import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { Link } from "react-router-dom";
import Contato from "../contato/contato";

export default function Home() {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200">
        <div className="container w-full  items-center justify-center ">
          <section className="grid grid-cols-2 mt-10 mb-10 p-5 ">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-medium p-2 text-center ">Participe da Transformação</h2>
              <p className="text-justify p-3 text-xl mb-10">Capacite-se conosco e mude sua vida! Junte-se aos nossos cursos e palestras, desenvolvidos para abrir portas no mercado de trabalho. Juntos, vamos construir um futuro mais justo e igualitário.</p>
              <Link to="/servicos" className="flex justify-center">
                <button className="font-medium border p-3 rounded-md bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white">Conheça nossos serviços aqui!</button>
              </Link>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl">
              <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Teamwork.png?updatedAt=1717618544997" alt="" className="w-[80%] " />
            </div>
          </section>

          <section className="flex p-10 gap-3 bg-white rounded-lg md:m-10">
            <img src="https://ik.imagekit.io/xjhxvkfev/nisia-floresta-em-reproducao-antes-dos-30-anos-de-idade-1653592097991_v2_750x1000.jpg?updatedAt=1719013072693" alt="" className="w-[20%] bg-white rounded-xl" />
            <div className="flex flex-col justify-center gap-7 items-center">
              <h1 className="text-4xl font-semibold p-2 text-center">Centro de Desenvolvimento <span className="flex flex-col">Nisía Floresta</span></h1>
              <p className="text-xl text-center text-slate-600 p-3 font-medium">Temos como missão transformar a vida das mulheres por meio da educação, capacitando-as com formações que promovam o empoderamento e a igualdade de gênero na área de técnologia. Acreditamos que, ao fornecer ferramentas e conhecimentos ajudamos as mulheres a alcançar seu potencial máximo, contribuindo para um mundo mais justo e igualitário.</p>
            </div>


          </section>

          <section className="flex flex-col my-10 gap-3 p-3 bg-white rounded-lg md:m-10">
            <div className="flex flex-col justify-center gap-7 items-center">
              <img src="https://ik.imagekit.io/xjhxvkfev/5.png?updatedAt=1719012453740" alt="" className="w-[12%] bg-white rounded-xl" />
              <h2 className="text-3xl font-medium p-2 text-center flex flex-col justify-center">ODS 5 da ONU: <span>Igualdade de Gênero</span></h2>
            </div>

            <p className="text-xl text-center text-slate-600 p-3 font-medium">Estamos alinhados com o Objetivo de Desenvolvimento Sustentável 5 da ONU, que busca alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Acreditamos que a capacitação e a educação são pilares essenciais para eliminar as desigualdades e construir um futuro onde todos possam prosperar.</p>
          </section>


          <Contato />
        </div>
      </div>
    </>
  );
}




{/* <div className="flex items-center justify-center bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200">
          <div className="container w-full p-6 mt-5 items-center justify-center ">
            <section className="grid grid-cols-2 gap-3">
              <h1 className="text-4xl font-semibold p-2 text-center">Centro de Desenvolvimento <span className="flex flex-col">Nisía Floresta</span></h1>
              <p className="text-base text-justify p-3">Tem como missão transformar a vida das mulheres por meio da educação, capacitando-as com formações que promovam o empoderamento e a igualdade de gênero. Acreditamos que, ao fornecer ferramentas e conhecimentos ajudamos as mulheres a alcançar seu potencial máximo, contribuindo para um mundo mais justo e igualitário.</p>
            </section>

            <section className="grid grid-cols-2 mt-10 gap-3 p-3">
              <p className="text-base text-justify p-3">Estamos alinhados com o Objetivo de Desenvolvimento Sustentável 5 da ONU, que busca alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Acreditamos que a capacitação e a educação são pilares essenciais para eliminar as desigualdades e construir um futuro onde todos possam prosperar.</p>
              <h2 className="text-3xl font-medium p-2 text-center flex flex-col justify-center">ODS 5 da ONU <span>Igualdade de Gênero</span></h2>
            </section>

            <section className="grid grid-cols-2 mt-10 mb-10 p-5 ">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-medium p-2 text-center ">Participe da Transformação</h2>
                <p className="text-base text-justify p-3">Capacite-se conosco e mude sua vida! Junte-se aos nossos cursos e palestras, desenvolvidos para abrir portas no mercado de trabalho. Juntos, vamos construir um futuro mais justo e igualitário.</p>
                <Link to="/servicos" className="flex justify-center">
                  <button className="font-medium border p-3 rounded-md bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white">Conheça nossos serviços aqui!</button>
                </Link>
              </div>

              <div className="flex flex-col items-center">
                <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Teamwork.png?updatedAt=1717618544997" alt="" className="w-80" />
              </div>
            </section>

            <Contato />
          </div>
        </div> */}