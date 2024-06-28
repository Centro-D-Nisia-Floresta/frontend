import { useState, useContext, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function DeletarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta("Categoria deletada com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar categoria", "sucesso");
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <>
      <div className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100">
        <div className="min-h-[80vh]">
          <div className="container w-1/3 mt-6 mx-auto">
            <h1 className="text-4xl font-semibold p-2 text-center">Deletar Categoria</h1>
            <p className="text-center font-semibold mb-4"> Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className="rounded-xl shadow-xl shadow-md shadow-fuchsia-950 flex flex-col rounded-2xl overflow-hidden justify-between">
              <header className="py-2 px-6 text-2xl font-medium bg-fuchsia-800 text-white">Categoria</header>

              <div className="container mb-4 py-2">
                <p className="font-medium text-center text-xl">{categoria.tipoServico}</p>
              </div>

              <div className="flex">
                <button className="border border-fuchsia-900 hover:bg-fuchsia-900 w-full hover:text-white py-2" onClick={retornar}>
                  Não
                </button>
                <button className="w-full border border-fuchsia-700 hover:bg-fuchsia-700 w-full hover:text-white flex items-center justify-center" onClick={deletarCategoria}>
                  {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}