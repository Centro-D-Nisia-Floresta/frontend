import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { List, SignOut, User } from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta(`Você foi desconectado!`, "info");
    navigate("/login");
  }

  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-4">
        <div className="">
          <Link to="/home" className="">
            <span className="text-3xl   font-light">NÍSIA FLORESTA</span>
          </Link>
        </div>

        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {usuario.tipo === "adm" && (
              <>
                <li>
                  <Link to="/cadastrarservico" className="hover:text-gray-500 font-medium">
                    Cadastrar Serviço
                  </Link>
                </li>
                <li>
                  <Link to="/cadastrarcategoria" className="hover:text-gray-500 font-medium">
                    Cadastrar Categoria
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/servicos" className="hover:text-gray-500 font-medium">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="hover:text-gray-500 font-medium">
                Categorias
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gray-500 font-medium">
                Sobre nós
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          {usuario.token !== "" ? (
            <div id="botao-nav-login" className="flex items-center gap-3">
              <Link to="/perfil" className="border rounded-xl border-fuchsia-200 p-1 hover:shadow-md hover:bg-fuchsia-100">
                <User size={30} weight="regular" />
              </Link>
              <Link to="/login" onClick={logout} className="border rounded-xl border-fuchsia-200 p-1 hover:shadow-md hover:bg-fuchsia-100 ">
                <SignOut size={30} weight="regular" />
              </Link>
            </div>
          ) : (
            <div>
              <button className="bg-magenta-/-fuchsia-950 text-white hover:bg-fuchsia-800 text-xl hover:text-white hover:duration-500 px-5 py-2 rounded-full font-medium">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;