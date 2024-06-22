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
        ToastAlerta("Erro ao cadastrar usuário!", 'erro');
      }
    } else {
      ToastAlerta("As senhas não coincidem!", 'info')
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-bright-turquoise-200 to-magenta-/-fuchsia-200 min-h-[80vh]">
        <div className="container w-[40%] m-4 p-6 mt-5 flex flex-col items-center bg-white rounded-xl shadow-lg">
          <div className="mb-3 flex flex-col gap-1">
            <h2 className="text-2xl font-medium sm:text-[2rem]">Cadastre-se!</h2>
          </div>

          <form className="flex flex-col justify-center gap-2 w-80 p-3" onSubmit={cadastrarNovoUsuario}>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" placeholder="Seu nome" className="p-2 border border-gray-300 rounded-md"
              value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" placeholder="E-mail" className="p-2 border border-gray-300 rounded-md"
              value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="data" name="dataNascimento" placeholder="dia/mês/ano" className="p-2 border border-gray-300 rounded-md"
              value={usuario.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="foto">Foto</label>
            <input type="text" name="foto" placeholder="URL da foto" className="p-2 border border-gray-300 rounded-md"
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="********" className="p-2 border border-gray-300 rounded-md"
              value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />

            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" name="confirmarSenha" placeholder="********" className="p-2 border border-gray-300 rounded-md"
              value={confirmaSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)}
            />

            <button type="submit" className="flex justify-center rounded-lg p-2 bg-bright-turquoise-500 hover:bg-bright-turquoise-600 w-full hover:text-white">
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
            </button>
          </form>

          <p className="text-sm mt-7">Já possui uma conta?
            <Link to="/login" className="font-medium hover:underline text-fuchsia-700"> Entre aqui!</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Cadastro;