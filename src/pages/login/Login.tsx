import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  console.log(JSON.stringify(usuarioLogin));

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 min-h-[80vh] p-20">
        <div className="container w-[40%] m-4 p-6 mt-5 flex flex-col items-center bg-white rounded-xl shadow-fuchsia-950 shadow-md">
          <div className="mb-4 flex flex-col gap-1">
            <h2 className="text-3xl font-light">Entre na sua Conta</h2>
            <p className="text-sm text-gray-500 sm:text-base">Por favor, coloque seu email e senha</p>
          </div>

          <form className="mb-8 max-w-[420px] flex flex-col justify-center p-4" onSubmit={login}>
            <label htmlFor="usuario">Email</label>
            <input type="text" name="usuario" placeholder="email@email.com" className="mb-4 p-2 border border-gray-300 rounded-md w-80" value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="********" className="mb-6 p-2 border border-gray-300 rounded-md w-80" value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

            <button type="submit" className="flex justify-center rounded-lg py-2 text-white bg-fuchsia-950 hover:bg-fuchsia-800 w-full hover:text-white">
              {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} /> : <span>Entrar</span>}
            </button>
          </form>

          <p className="text-sm">
            Primeiro Acesso?
            <Link to="/cadastro" className="font-medium hover:underline text-fuchsia-950">
              {" "}
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
