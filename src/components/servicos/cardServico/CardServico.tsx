import { Basket } from "@phosphor-icons/react";
import Servico from "../../../models/Servico";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardServicosProps {
  servico: Servico;
}

export default function CardServico({ servico }: CardServicosProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div>
        <div className="container flex flex-col w-90 gap-2 border rounded-md p-4 bg-white shadow-xl shadow-md shadow-fuchsia-950">
          <div className="flex justify-center p-4">
            <img src={servico.foto} alt="" className="w-screen h-32 object-cover rounded opacity-80" />
          </div>

          <div className="mb-3">
            <h2 className="text-lg text-center font-medium mb-3">
              {servico.categoria?.tipoServico} {servico.nome}
            </h2>
            <p className="text-[1.1rem] pl-2">Duração: {servico.duracao}</p>
            <p className="text-[1.1rem] pl-2 mb-4">Vagas: {servico.vagas}</p>

            {servico.gratuidade ? (
                <p className="text-[1.1rem] pl-2 font-medium">Gratuito</p>
              ) : (
                <p className="text-[1.1rem] pl-2 font-medium">R${servico.preco}</p>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex ">
              {usuario.tipo === "adm" && (
                <>
                  <Link className="text-center w-full rounded border border-fuchsia-900 hover:bg-fuchsia-900 w-full hover:text-white p-1" to={`/editarservico/${servico.id}`}>
                    <button>Editar</button>{" "}
                  </Link>
                  <Link className="text-center w-full rounded border border-fuchsia-700 hover:bg-fuchsia-700 w-full hover:text-white p-1" to={`/deletarservico/${servico.id}`}>
                    <button>Apagar</button>{" "}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
