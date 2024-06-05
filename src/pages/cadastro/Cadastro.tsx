import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { RotatingLines } from "react-loader-spinner";
import { cadastrarUsuario } from "../../services/Service";

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
        alert("Cadastro realizado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar!");
      }
    } else {
      alert("As senhas não coincidem!"), setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <>
      <div id="page-cadastro" className="flex justify-center items-center">
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
            <img id="img-logo-cadastro" src="" alt="" />
            <h4>Cadastre-se</h4>

            <form className="flex justify-center items-center flex-col w-2/3 gap-3" onSubmit={cadastrarNovoUsuario}>
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" placeholder="Nome" className="border-2 border-slate-700 rounded p-2" value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

              <label htmlFor="email">Usuario</label>
              <input type="text" name="usuario" id="email" placeholder="Digite seu e-mail" className="border-2 border-slate-700 rounded p-2" value={usuario.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" id="senha" placeholder="Senha" className="border-2 border-slate-700 rounded p-2" value={usuario.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

              <label htmlFor="confirmarSenha">Confirmar senha</label>
              <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="Confirmar senha" className="border-2 border-purple-300 rounded p-2" value={confirmaSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmaSenha(e)} />

              <label htmlFor="foto">Foto</label>
              <input type="text" name="foto" id="foto" placeholder="Foto" className="border-2 border-purple-300 rounded p-2" value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input type="date" name="dataNascimento" id="dataNascimento" placeholder="Data de Nascimento" className="border-2 border-slate-700 rounded p-2" value={usuario.dataNascimento} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

              <button type="submit" className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2">
                {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Cadastrar</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cadastro;
