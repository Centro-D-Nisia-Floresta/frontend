import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Servico from "../../../models/Servico";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";

export default function FormServico() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipoServico: "", descricao: "", servico: null });
  const { id } = useParams<{ id: string }>();
  const [servico, setServico] = useState<Servico>({
    id: 0,
    nome: "",
    duracao: "",
    preco: 0,
    vagas: 0,
    gratuidade: false,
    foto: "",
    categoria: null,
    usuario: null,
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
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

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias, {
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
    buscarCategorias();
    if (id !== undefined) {
      buscarServicoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
    });
  }, [categoria, usuario]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setServico((prevServico) => ({
      ...prevServico,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function retornar() {
    navigate("/servicos");
  }

  async function gerarNovaServico(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id != undefined) {
      try {
        await atualizar(`/servicos`, servico, setServico, {
          headers: { Authorization: token },
        });
        ToastAlerta("O serviço foi atualizado com sucesso!", "successo");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o serviço", "error");
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: { Authorization: token },
        });
        ToastAlerta("O serviço foi cadastrado com sucesso", "successo");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o serviço", "error");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }
  const carregandoCategoria = categoria.tipoServico === "";

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200">
        <div className="container w-[40%] m-4 p-6 mt-5 flex flex-col items-center bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-semibold p-2">{id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}</h1>

          <form className="flex w-full max-w-2xl flex-col p-4" onSubmit={gerarNovaServico}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" placeholder="Nome do produto" className="p-2 border border-gray-300 rounded-md" value={servico.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="foto" className="mt-2">
              Foto
            </label>
            <input type="url" name="foto" placeholder="URL da foto" className="p-2 border border-gray-300 rounded-md" value={servico.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="vagas" className="mt-2">
              Vagas
            </label>
            <input type="number" name="vagas" placeholder="Quantidade de vagas disponíveis" className="p-2 border border-gray-300 rounded-md" value={servico.vagas} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="duracao" className="mt-2">
              Duração
            </label>
            <input type="text" name="duracao" placeholder="Tempo investido" className="p-2 border border-gray-300 rounded-md" value={servico.duracao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <div className="mt-2">
              <label htmlFor="gratuidade">Gratuito?</label>
              <input type="checkbox" name="gratuidade" className="ml-4" checked={servico.gratuidade} onChange={atualizarEstado} /> Sim
            </div>

            <label htmlFor="preco" className="mt-2">
              Valor
            </label>
            <input type="number" name="preco" placeholder="Valor investido" className="p-2 border border-gray-300 rounded-md" value={servico.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="categoria" className="mt-2">
              Categoria
            </label>
            <select name="categoria" className="p-2 border border-gray-300 rounded-md" onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>
                Selecione uma Categoria
              </option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id}>{categoria.tipoServico}</option>
                </>
              ))}
            </select>

            <div className="flex flex-col">
              <div className="flex">
                <button className="flex justify-center rounded-lg py-2 mt-5 bg-red-400 hover:bg-red-600 w-full hover:text-white" onClick={retornar}>
                  Não
                </button>

                <button type="submit" className="flex justify-center rounded-lg py-2 mt-5 bg-bright-turquoise-500 hover:bg-bright-turquoise-600 w-full hover:text-white" disabled={carregandoCategoria || isLoading}>
                  {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id !== undefined ? "Atualizar" : "Cadastre um Serviço"}</span>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
