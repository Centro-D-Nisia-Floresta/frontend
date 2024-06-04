import { Link } from 'react-router-dom'
import Servico from '../../../models/Servico'

interface CardServicoProps {
    servico: Servico
}

function CardServico({ servico }: CardServicoProps) {
    return (
        <main>

            <div>
                <div>
                    <img
                        src={servico.usuario?.foto}                       
                        alt={servico.usuario?.nome} />
                    <h3>
                        {servico.usuario?.nome}
                    </h3>
                </div>
                <div>
                    <h4>{servico.titulo}</h4>
                    <p>{servico.texto}</p>
                    <p>Tema: {servico.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(servico.data))}</p>
                </div>
            </div>
            <div>
                <Link to={`/editarservico/${servico.id}`} >
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarservico/${servico.id}`}>
                    <button>Deletar</button>
                </Link>
            </div>
        </main>
    )
}

export default CardServico