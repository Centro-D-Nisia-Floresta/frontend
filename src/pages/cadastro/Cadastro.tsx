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
      } catch (error) {
        ToastAlerta("Erro ao cadastrar!", 'erro');
      }
    } else {
      ToastAlerta("As senhas não coincidem!", 'info'), setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200 flex h-screen items-center justify-center font-bold py-10">
        { }

        <div className="bg-white rounded-xl shadow-2xl border-fuchsia-900 w-1/3 ">
          <form className="flex justify-center items-center flex-col gap-4 py-2 px-10" onSubmit={cadastrarNovoUsuario}>
            <h2 className="text-black text-5xl pb-6 pt-3">Cadastre-se</h2>

            <div className="flex flex-col w-2/3">
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" placeholder="Nome" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            </div>

            <div className="flex flex-col w-2/3">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="usuario" id="email" placeholder="Digite seu e-mail" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            </div>

            <div className="flex flex-col w-2/3">
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" name="dataNascimento" id="dataNascimento" placeholder="Data de Nascimento" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuario.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            </div>

            <div className="flex flex-col w-2/3">
              <label htmlFor="foto">Foto</label>
              <input type="text" name="foto" id="foto" placeholder="Foto" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            </div>

            <div className="flex flex-col w-2/3">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
            </div>

            <div className="flex flex-col w-2/3">
              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="Confirmar senha" className="border-2 border-fuchsia-900 700 rounded p-2" value={confirmaSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)} />
            </div>

            <button type="submit" className="flex items-center justify-center rounded bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white w-1/3 py-2">
              {" "}
              { }
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
            </button>

            <hr className="border-slate-800 w-3/4 mt-6" />

          </form>
          <p className="flex items-center justify-center p-6">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-indigo-800 hvoer:underline pl-2">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Cadastro;