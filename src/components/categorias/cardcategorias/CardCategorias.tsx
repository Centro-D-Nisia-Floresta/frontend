import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="flex flex-col overflow-hidden justify-between max-w-[22rem]">
      
      {/* <div className="w-full items-center justify-center"> */}
        <p className="p-6 text-3xl items-center justify-center flex">{categoria.tipoServico}</p>
        <p className="items-center justify-center flex">{categoria.descricao}</p>
      {/* </div> */}

      <div className="flex gap-4">
        <Link className="w-full mt-5 bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/editarcategoria/${categoria.id}`}>
          <button>Editar</button>
        </Link>

        <Link className="w-full mt-5 bg-fuchsia-700 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/deletarcategoria/${categoria.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
