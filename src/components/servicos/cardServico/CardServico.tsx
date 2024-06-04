import { Link } from "react-router-dom";
import Servico from "../../../models/Servico";

interface CardServicoProps {
  servico: Servico;
}

function CardServico({ servico }: CardServicoProps) {
  return (
    <main>
      <div className="mt-5">
        <div>
          <img src={servico.usuario?.foto} alt={servico.usuario?.nome} />
          <h3>{servico.usuario?.nome}</h3>
        </div>
        <div>
          <h4>{servico.nome}</h4>
          <p>
            <img src={servico.foto} alt="" />
          </p>
          <p>Categoria: {servico.categoria?.tipoServico}</p>
          <p>Gratuito: {servico.gratuidade}</p>
          <p>Valor: {servico.preco}</p>
          <p>Vagas: {servico.vagas}</p>
          <p>Duracao: {servico.duracao}</p>
        </div>
      </div>
      <div>
        <Link to={`/editarservico/${servico.id}`}>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarservico/${servico.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </main>
  );
}

export default CardServico;