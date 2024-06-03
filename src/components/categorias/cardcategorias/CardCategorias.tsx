import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-blue-400 text-white font-bold text-2xl overflow-hidden justify-between">Categoria</header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.tipoServico}</p>
      {/* <img src={categoria.foto} className="h-24" alt="" /> */}

      <div className="flex">
        <Link className="w-full text-white bg-blue-400 hover:bg-blue-500 flex items-center justify-center py-2" to={`/editarcategoria/${categoria.id}`}>
          <button>Editar</button>
        </Link>

        <Link className="w-full text-white bg-red-400 hover:bg-red-500 flex items-center justify-center py-2" to={`/deletarcategoria/${categoria.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
