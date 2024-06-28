import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriasProps {
  categoria: Categoria;
}

export default function CardCategorias({ categoria }: CardCategoriasProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <div>
      <div className="container flex flex-col w-64 gap-2 border rounded-md p-5 m-4 bg-white shadow-xl">
        <div className="mb-3">
          <p className="text-3xl font-medium mb-3">{categoria.tipoServico}</p>
          <p className="">{categoria.descricao}</p>

          <div className="mt-8">
            <Link className="rounded border border-slate-300 font-medium mt-3 py-1 px-3 hover:shadow-md hover:bg-[#f8f8f8]" to="/servicos">
              <button>Ver mais</button>
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="flex mt-4">
              {usuario.tipo === "adm" && (
                <>
                  <Link className="text-center w-full rounded border border-fuchsia-900 hover:bg-fuchsia-900 w-full hover:text-white p-1" to={`/editarcategoria/${categoria.id}`}>
                    <button>Editar</button>
                  </Link>

                  <Link className="text-center w-full rounded border border-fuchsia-700 hover:bg-fuchsia-700 w-full hover:text-white p-1" to={`/deletarcategoria/${categoria.id}`}>
                    <button>Apagar</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}