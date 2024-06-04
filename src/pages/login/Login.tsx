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
      
      <div className="bg-teal-500 flex h-screen items-center justify-center font-bold">
        {}

      <div className="bg-white rounded-xl border-4 border-fuchsia-900 w-1/3">
        <form className="flex justify-center items-center flex-col gap-4 py-4 px-10" onSubmit={login}>
            <h2 className="text-black text-5xl pb-6 pt-3">Entrar</h2>

          <div className="flex flex-col w-2/3">
            <label htmlFor="usuario"> Email </label>
            <input type="text" id="usuario" name="usuario" placeholder="exemplo@email.com" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          </div>

          <div className="flex flex-col w-2/3">
            <label htmlFor="senha"> Senha </label>
            <input type="password" id="senha" name="senha" placeholder="Senha" className="border-2 border-fuchsia-900 700 rounded p-2" value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          </div>

          <button type="submit" className="flex items-center justify-center rounded bg-fuchsia-900 hover:bg-teal-100 hover:text-fuchsia-800 font-bold text-white w-1/3 py-2">
            {" "}
            {}
            {isLoading ? <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true}  /> : <span>Entrar</span>}
          </button>

          <hr className="border-slate-800 w-3/4 mt-6"/>

        </form>
          <p className="flex items-center justify-center p-6">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-indigo-800 hvoer:underline pl-2">
              Cadastre-se
            </Link>
          </p>
        </div>
        
          <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
