import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { RotatingLines } from "react-loader-spinner";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    tipo: "",
    usuario: "",
    senha: "",
    dataNascimento: "",
    foto: "",
    servico: null,
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retorna();
    }
  }, [usuario]);

  function retorna() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        ToastAlerta("Cadastro realizado com sucesso!", 'sucesso');
        retorna(); 
      } catch (error) {
        ToastAlerta("Erro ao cadastrar usuário!", 'erro');
      }
    } else {
      ToastAlerta("As senhas não coincidem ou a senha é muito curta!", 'info');
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 min-h-[80vh]">
        <div className="container w-[40%] m-4 p-6 mt-5 flex flex-col items-center bg-white rounded-xl shadow-fuchsia-950 shadow-md">
          <div className="mb-3 flex flex-col gap-1">
            <h2 className="text-2xl font-medium sm:text-[2rem]">Cadastre-se!</h2>
          </div>

          <form className="flex flex-col justify-center gap-2 w-80 p-3" onSubmit={cadastrarNovoUsuario}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" placeholder="Seu nome" className="p-2 border border-gray-300 rounded-md"
              value={usuario.nome} onChange={atualizarEstado}
            />

            <label htmlFor="usuario">E-mail</label>
            <input type="email" name="usuario" placeholder="E-mail" className="p-2 border border-gray-300 rounded-md"
              value={usuario.usuario} onChange={atualizarEstado}
            />

            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" name="dataNascimento" className="p-2 border border-gray-300 rounded-md"
              value={usuario.dataNascimento} onChange={atualizarEstado}
            />

            <label htmlFor="foto">Foto</label>
            <input type="text" name="foto" placeholder="URL da foto" className="p-2 border border-gray-300 rounded-md"
              value={usuario.foto} onChange={atualizarEstado}
            />

            <label htmlFor="tipo">Tipo de Usuário</label>
            <input type="text" name="tipo" placeholder="Comum ou adm" className="p-2 border border-gray-300 rounded-md"
              value={usuario.tipo} onChange={atualizarEstado}
            />

            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="********" className="p-2 border border-gray-300 rounded-md"
              value={usuario.senha} onChange={atualizarEstado}
            />

            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" name="confirmarSenha" placeholder="********" className="p-2 border border-gray-300 rounded-md"
              value={confirmaSenha} onChange={handleConfirmaSenha}
            />

            <button type="submit" className="flex justify-center rounded-lg py-2 text-white bg-fuchsia-950 hover:bg-fuchsia-800 w-full hover:text-white">
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
            </button>
          </form>

          <p className="text-sm mt-7">Já possui uma conta?
            <Link to="/login" className="font-medium hover:underline text-fuchsia-700"> Entre aqui!</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Cadastro;