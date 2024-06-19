import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Cards } from "@phosphor-icons/react";

interface CardCategoriasProps {
  categoria: Categoria;
}

export default function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div>
      <div className="container flex flex-col w-64 gap-2 border border-fuchsia-700 rounded-md p-3">
        <div className="mb-3">
          <p className="text-3xl font-medium mb-1">{categoria.tipoServico}</p>
          <p className="">{categoria.descricao}</p>

          <div className="flex flex-col">
            <div className="flex mt-4">
              <Link className="text-center w-full text-white bg-fuchsia-400 hover:bg-fuchsia-600 rounded" to={`/editarcategoria/${categoria.id}`}>
                <button>Editar</button>
              </Link>
                
              <Link className="text-center w-full text-white bg-red-400 hover:bg-red-600 rounded" to={`/deletarcategoria/${categoria.id}`}>
                <button>Deletar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div className="flex flex-col overflow-hidden justify-between max-w-[22rem] bg-bright-turquoise-200 rounded-xl shadow-xl p-5">

    <div className="flex gap-4">
      <Link className="w-full mt-5 bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/editarcategoria/${categoria.id}`}>
        <button>Editar</button>
      </Link>

      <Link className="w-full mt-5 bg-fuchsia-700 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" to={`/deletarcategoria/${categoria.id}`}>
        <button>Deletar</button>
      </Link>
    </div>
  </div> */}