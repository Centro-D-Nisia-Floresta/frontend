import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Contato from "../contato/contato";

export default function Home() {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      <div
        className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 bg-left bg-cover "
        // style={{
        //   backgroundImage: "url('https://shecodes.ly/wp-content/uploads/hero-svg-bg.svg')",
        // }}

        //
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100">
          <div className="flex items-center">
            <div className="text-center mx-20 md:text-left md:p-0">
              <div className="mt-20 text-primary font-light">Educação e Capacitação para Mulheres</div>
              <h3 className="text-4xl  mb-4 mt-6 font-light">REDUZINDO A DESIGUALDADE DE GÊNERO NA TECNOLOGIA</h3>

              <button className="mb-20 m-6 mx-auto text-xl bg-fuchsia-950 hover:bg-fuchsia-800 text-white font-light hover:text-white py-2 px-4 border border-violet-800 hover:border-transparent rounded-full">Quero Saber Mais</button>
            </div>
          </div>

          <div className="relative ">
            <img className="ml-20 object-cover opacity-50" src="https://ik.imagekit.io/rx2wvtnsm/A64527B3-6617-402F-907B-CAF36A556762_1_201_a%20(2).jpeg?updatedAt=1719290944935" alt="" />
          </div>
        </div>
      </div>

      {/* //test below */}

      <div className="bg-white">
        <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex items-center">
            <div className="text-center mx-10 md:text-left md:p-0">
              <h1 className="text-5xl  mt-4 mb-0 font-thin">Centro de Desenvolvimento</h1>
              <h1 className="text-8xl  mt-4 mb-0 font-thin">Nísia Floresta</h1>
              <p className="text-base text-justify font-thin mt-12">
                Estamos comprometidos com o Objetivo de Desenvolvimento Sustentável 5 da ONU, que visa promover a igualdade de gênero e o empoderamento de todas as mulheres. Acreditamos que a educação e a capacitação são fundamentais para eliminar desigualdades e construir um futuro onde todos possam prosperar. Investir no potencial das mulheres é investir em um mundo mais justo e equitativo, onde oportunidades iguais são acessíveis a todos.
              </p>
            </div>
          </div>

          <div className="relative">
            <img className=" mx-auto object-cover w-100 h-100 opacity-50" src="https://ik.imagekit.io/rx2wvtnsm/E2CACDBD-A1A3-470F-AF5B-355148DAB8F2_4_5005_c.jpeg?updatedAt=1719279163995" alt="" />
          </div>
        </div>

        <div className="bg-magenta-/-fuchsia-950 bg-left bg-cover ">
          <div className="container mx-auto mt-0 grid grid-cols-1  items-center text-white">
            <div className="text-center mt-28 mx-10  md:text-left md:p-0">
              <h1 className="text-center text-4xl  mt-4 mb-0 font-thin">NOSSA MISSÃO</h1>
              <h1 className="text-center text-5xl  mt-4 mb-0 font-light">Educação e Capacitação Para Mulheres! </h1>

              <p className=" text-justify text-2xl font-thin mb-40 mt-14">
                O Centro de Desenvolvimento Nísia Floresta tem como missão transformar a vida das mulheres por meio da educação, capacitando-as com formações que promovam o empoderamento e a igualdade de gênero na área de tecnologia. Nossos programas visam preparar as mulheres para se destacarem em um mercado de trabalho cada vez mais digital e competitivo, promovendo a inovação e impulsionando o crescimento sustentável em busca de um futuro melhor.
              </p>

              {/* <img className="  w-100 h-100 object-cover mx-auto mt-20 mb-20 " src="https://ik.imagekit.io/rx2wvtnsm/Logokit%20Ni%CC%81sia%20Floresta%20(5).png?updatedAt=1719317726276" alt="" /> */}
            </div>
          </div>
        </div>

        <section className="container mx-auto  grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center mx-10 md:text-left md:p-0 items-center mb-10 ">
            <h2 className="text-3xl font-light mt-4 mb-0 ">Comece agora uma carreira em tecnologia!</h2>
            <p className=" text-2xl font-thin mb-10 mt-10"> Participe de nossos cursos, palestras, workshops e mentorias projetados para empoderar e capacitar mulheres para o mercado de trabalho em tecnologia. </p>

            <Link to="/servicos" className=" items-center">
              <button className="border p-4 text-xl py-3 px-4 bg-fuchsia-950 text-white hover:bg-fuchsia-800 font-light  hover:text-white rounded-full">Conheça Nossos Serviços Aqui!</button>
            </Link>
          </div>

          <div className="mx-auto">
            <img src="https://ik.imagekit.io/rx2wvtnsm/Centro%20de%20Desenvolvimento%20(3).png?updatedAt=1719340635958" alt="" />
          </div>
        </section>

        <Contato />
      </div>
    </>
  );
}

//Junte-se a nós nessa jornada e construa um amanhã mais brilhante!
