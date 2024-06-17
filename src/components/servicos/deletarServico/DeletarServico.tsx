import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Servico from "../../../models/Servico";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function DeletarServico() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [servico, setServico] = useState<Servico>({} as Servico);
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: {Authorization: token}
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("O token expirou, favor logar novamente", 'info');
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Por favor, faça login!", 'info');
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarServico() {
    setIsLoading(true);

    try {
      await deletar(`/servicos/${id}`, {
        headers: { Authorization: token },
      });
      ToastAlerta("Serviço apagado com sucesso", 'sucesso');
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o serviço", 'erro');
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/servicos");
  }

  return (
    <>
      <div className=" container min-h-[80vh]">
        <div className="container w-1/3 mt-6 mx-auto">
          <h1 className="text-4xl font-semibold p-2 text-center">Deletar Serviço</h1>
          <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar a serviço a seguir?</p>

          <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
            <header className="py-2 px-6 text-2xl font-medium bg-bright-turquoise-200">Serviço</header>

            <div className="container mb-4 py-2">
              <p className="font-medium text-center text-xl">{servico.nome}</p>
            </div>

            <div className="flex">
              <button className="text-white bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
                Não
              </button>
              <button className="w-full text-white bg-bright-turquoise-400 hover:bg-bright-turquoise-600 flex items-center justify-center" onClick={deletarServico}>
                {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Sim</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}