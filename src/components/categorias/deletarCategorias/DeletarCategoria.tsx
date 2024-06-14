import { useState, useContext, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
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
      navigate("/");
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
        headers: {
          Authorization: token,
        },
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
    <div className="bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200 min-h-screen">
      <div className="container w-[56%] mx-auto bg-white min-h-screen items-center justify-center flex flex-col border-2 rounded-xl">
        <h1 className="text-4xl text-center my-4">Deletar categoria</h1>
        <p className="text-center font-semibold mb-4">Você tem certeza de que deseja deletar a categoria a seguir?</p>
        <div className="border flex flex-col rounded-xl overflow-hidden justify-between w-1/2 shadow-xl">
          <header className="pt-2 px-6 bg-bright-turquoise-200 text-black font-bold text-2xl text-center">Categoria</header>
          <p className="p-8 text-3xl bg-bright-turquoise-200 h-full text-center">{categoria.tipoServico}</p>
          <div className="flex gap-x-4">
            <button className="w-full mt-5 bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2" onClick={retornar}>
              Não
            </button>
            <button
              className="w-full mt-5 bg-fuchsia-700 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white flex items-center justify-center py-2"
              onClick={deletarCategoria}
            >
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
