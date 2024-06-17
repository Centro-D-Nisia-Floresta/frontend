import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Contato from "../contato/Contato";
import { Link } from "react-router-dom";

export default function Home() {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      <div className="container w-full m-4 p-6 mt-5 ">
        <section className="grid grid-cols-2 gap-3">
          <h1 className="text-4xl font-semibold p-2 text-center">Centro de Desenvolvimento <span className="flex flex-col">Nisía Floresta</span></h1>
          <p className="text-base text-justify p-3">Tem como missão transformar a vida das mulheres por meio da educação, capacitando-as com formações que promovam o empoderamento e a igualdade de gênero. Acreditamos que, ao fornecer ferramentas e conhecimentos ajudamos as mulheres a alcançar seu potencial máximo, contribuindo para um mundo mais justo e igualitário.</p>
        </section>

        <section className="grid grid-cols-2 mt-10 gap-3 p-3">
          <p className="text-base text-justify p-3">Estamos alinhados com o Objetivo de Desenvolvimento Sustentável 5 da ONU, que busca alcançar a igualdade de gênero e empoderar todas as mulheres e meninas. Acreditamos que a capacitação e a educação são pilares essenciais para eliminar as desigualdades e construir um futuro onde todos possam prosperar.</p>
          <h2 className="text-3xl font-medium p-2 text-center flex flex-col justify-center">ODS 5 da ONU <span>Igualdade de Gênero</span></h2>
        </section>

        <section className="grid grid-cols-2 mt-10 mb-10 p-5">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-medium p-2 text-center">Participe da Transformação</h2>
            <p className="text-base text-justify p-3">Capacite-se conosco e mude sua vida! Junte-se aos nossos cursos e palestras, desenvolvidos para abrir portas no mercado de trabalho. Juntos, vamos construir um futuro mais justo e igualitário.</p>
            <Link to="/servicos" className="flex justify-center">
              <button className="font-medium border p-3 rounded-md bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white">Conheça nossos serviços aqui!</button>
            </Link>
        </div>
                    
          <div className="flex flex-col items-center">
            <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Teamwork.png?updatedAt=1717618544997" alt="" className="w-80" />
          </div>
        </section>

        <Contato/>
      </div>
    </>
  );
}