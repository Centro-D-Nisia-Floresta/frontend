

function FormServicos() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Tema[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: "" });
  const [servico, setServico] = useState<Servico>({} as Servico);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPostagemPorId(id: string) {
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
      ToastAlerta("You precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTCategorias();

    if (id !== undefined) {
      buscarServicoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

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

        ToastAlerta("Post successfully updated", "success");
      } catch (error: any) {
        console.log(error);
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Error updating Post", "error");
        }
      }
    } else {
      try {
        await cadastrar(`/servicos`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerta("Post created successfully", "success");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Error when creating the Post", "error");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center text-white">
      <h1 className="text-4xl text-center my-8">{id !== undefined ? "Edit Post" : "Create Post"}</h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaServico}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="titulo">Post Title</label>
          <input type="text" placeholder="Title" name="titulo" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Post Text</label>
          <input type="text" placeholder="Text" name="texto" required className="border-2 border-slate-700 rounded p-2 text-black" value={servico.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Post Theme</p>
          <select name="tema" id="tema" className="border p-2 border-slate-800 rounded text-black" onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>
              Select a Theme
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categorias.id}>{categorias.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200
                          hover:bg-blue-900 text-white font-bold w-1/2 
                          mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria}
        >
          {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>{id !== undefined ? "Update" : "Create"}</span>}
        </button>
      </form>
    </div>
  );
}

export default FormServicos;
