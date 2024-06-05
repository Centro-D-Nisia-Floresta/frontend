import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import Servico from "../../../models/Servico";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import Categoria from "../../../models/Categoria";

function FormServicos() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipoServico: "", descricao: "", servico: null });
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

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
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

  async function buscarCategoriaPorId(id: string) {
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
      navigate("/");
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
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("O serviço foi cadastrado com sucesso!", "successo");
      } catch (error: any) {
        console.log(error);
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o serviço", "error");
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
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
    <div className="container flex flex-col mx-auto items-center text-black">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? "Editar Post" : "Servicos"}</h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaServico}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="nome">Nome</label>
          <input type="text" placeholder="Nome" name="nome" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="foto">Foto</label>
          <input type="text" placeholder="Foto" name="foto" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="duracao">Duração</label>
          <input type="text" placeholder="Text" name="duracao" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.duracao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="vagas">Vagas</label>
          <input type="number" placeholder="Vagas" name="vagas" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.vagas} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="gratuito">Gratuito</label>
          <input type="checkbox" placeholder="Gratuito" name="gratuidade" className="border-2 border-slate-700 rounded p-2 text-black" checked={servico.gratuidade} onChange={atualizarEstado} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input type="number" placeholder="Preço" name="preco" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Categoria</p>
          <select name="categoria" id="categoria" className="border p-2 border-slate-800 rounded text-black" onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>
              Seleciona a Categoria
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.tipoServico}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200
                          hover:bg-blue-900 text-white font-bold w-1/2 
                          mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria || isLoading}
        >
          {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id !== undefined ? "Update" : "Cadastre o Serviço"}</span>}
        </button>
      </form>
    </div>
  );
}

export default FormServicos;