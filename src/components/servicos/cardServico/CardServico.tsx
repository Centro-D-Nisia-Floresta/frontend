

import { Link } from "react-router-dom";

import Servico from "../../../models/Servico";

interface CardServicosProps {
  servico: Servico;
}

function CardServico({ servico }: CardServicosProps) {
  return (

    <div className="flex flex-col overflow-hidden justify-between max-w-[22rem] bg-teal-600">
        <div className="flex w-full bg-teal-500 ">
          <img src="https://placehold.co/600x400" alt="Foto Serviço" /> 
          {/* <input type="text" placeholder=""></input> */}
          <h3>{servico.usuario?.nome}</h3>
        </div>
        <h4 className="flex text-2xl ">{servico.nome}</h4>
        <div className="flex pb-4 text-1xl font-semibold flex-col">
          <p className="pb-4 text-1xl flex ">Categoria: {servico.categoria?.tipoServico}</p>
          <p className="flex  text-1xl ">Gratuito: {servico.gratuidade}</p>
          <p className="flex">Valor: {servico.preco}</p>
          <p className="flex">Vagas: {servico.vagas}</p>
          <p className="flex ">Duracao: {servico.duracao}</p>
        </div>


      <div className="flex gap-4">
        <Link className="w-full mt-5 bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/editarServico/${servico.id}`}>
          <button>Editar</button>
        </Link>

        <Link className="w-full mt-5 bg-fuchsia-700 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/deletarServico/${servico.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServico



// import { Link } from "react-router-dom";
// import Servico from "../../../models/Servico";

// interface CardServicoProps {
//   servico: Servico;
// }

// function CardServico({ servico }: CardServicoProps) {
//   return (
//     <main>
//       <div className="mt-5">
//         <div>
//           <img src={servico.usuario?.foto} alt={servico.usuario?.nome} />
//           <h3>{servico.usuario?.nome}</h3>
//         </div>
//         <div>
//           <h4>{servico.nome}</h4>
//           <p>
//             <img src={servico.foto} alt="" />
//           </p>
//           <p>Categoria: {servico.categoria?.tipoServico}</p>
//           <p>Gratuito: {servico.gratuidade}</p>
//           <p>Valor: {servico.preco}</p>
//           <p>Vagas: {servico.vagas}</p>
//           <p>Duracao: {servico.duracao}</p>
//         </div>
//       </div>
//       <div>
//         <Link to={`/editarservico/${servico.id}`}>
//           <button>Editar</button>
//         </Link>
//         <Link to={`/deletarservico/${servico.id}`}>
//           <button>Deletar</button>
//         </Link>
//       </div>
//     </main>
//   );
// }

// export default CardServico;