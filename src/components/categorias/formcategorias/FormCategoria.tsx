import { useState, useContext, useEffect, ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function FormCategoria() {
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
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar categoria.", "error");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar categoria.", "error");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <>
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200">
        <div className="container w-[40%] m-4 p-6 mt-5 flex flex-col items-center bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-semibold p-2">{id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}</h1>

          <form className="flex w-full max-w-2xl flex-col p-4" onSubmit={gerarNovaCategoria}>
            <label htmlFor="tipoServico">Nome</label>
            <input type="text" name="tipoServico" placeholder="Nome da categoria" className="p-2 border border-gray-300 rounded-md" value={categoria.tipoServico} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="descricao">Descrição</label>
            <input type="text" name="descricao" placeholder="Descreva a categoria" className="p-2 border border-gray-300 rounded-md" value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <div className="flex flex-col">
              <div className="flex">
                <button className="flex justify-center rounded-lg py-2 mt-5 bg-red-400 hover:bg-red-600 w-full hover:text-white" onClick={retornar}>
                  Não
                </button>

                <button type="submit" className="flex justify-center rounded-lg py-2 mt-5 bg-bright-turquoise-500 hover:bg-bright-turquoise-600 w-full hover:text-white">
                  {isLoading ? <RotatingLines strokeColor="black" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
