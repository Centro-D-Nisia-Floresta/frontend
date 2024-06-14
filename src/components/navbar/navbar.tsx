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
    ToastAlerta(`Você foi desconectado!`, 'info');
    navigate("/login");
  }


  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-4">
        <div className="">
          <Link to="/home" className="">
            <span className="text-4xl text-magenta-/-fuchsia-950 font-[Open Sans] font-semibold">NÍSIA</span>
            {/* <img className="h-[350px]" src="https://ik.imagekit.io/rx2wvtnsm/Nisa%20Floresta%20Branco?updatedAt=1717598564578" alt="LOGO DO PROJETO" /> */}
          </Link>
        </div>

        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {usuario.tipo === "adm" && (
              <>
                <li><Link to="/cadastroServico" className="hover:text-gray-500 font-medium">Cadastrar Serviço</Link></li>
                <li><Link to="/cadastroCategoria" className="hover:text-gray-500 font-medium">Cadastrar Categoria</Link></li>
              </>
            )}
            <li>
              <Link to="/servicos" className="hover:text-gray-500 font-medium">Serviços</Link>
            </li>
            <li>
              <Link to="/categorias" className="hover:text-gray-500 font-medium">Categorias</Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gray-500 font-medium">Sobre nós</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          {usuario.token !== "" ? (
            <div id="botao-nav-login" className="flex items-center gap-3">
              <Link to="/perfil" className='border rounded-xl border-slate-300 p-1 hover:shadow-md hover:bg-bright-turquoise-100 hover:border-magenta-/-fuchsia-200'><User size={30} weight="regular" /></Link>
              <Link to="/login" onClick={logout} className='border rounded-xl border-slate-300 p-1 hover:shadow-md hover:bg-bright-turquoise-100 hover:border-magenta-/-fuchsia-2'><SignOut size={30} weight="regular" /></Link>
              {/* acrescentar icone carrinho de compras */}
            </div>
          ) : (
            <div>
              <button className="bg-magenta-/-fuchsia-900 text-white hover:bg-bright-turquoise-200 text-xl hover:text-magenta-/-fuchsia-900 hover:duration-500 px-5 py-2 rounded-full font-medium">
                <Link to="/login">Login</Link>
                </button>
                
            </div>
          )}
        </div>
        {/* <List size={30} weight="regular" className="cursor-pointer md:hidden"/> */}
      </nav>
    </>
  );
}

export default Navbar;
