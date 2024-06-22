import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { Basket, SignOut, User } from "@phosphor-icons/react";

export default function Navbar() {
  const navigate = useNavigate();
  const { handleLogout, usuario } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("Você foi desconectado!", 'info');
    navigate("/login");
  }

  return (
    <>
      <nav className="flex justify-between items-center w-[92%] mx-auto p-4">
        <div className="">
          <Link to="/home" className="">
            <span id="logo" className="uppercase font-semibold text-2xl">Nísia Floresta</span>
          </Link>
        </div>

        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {usuario.tipo === "adm" && (
              <>
                <li><Link to="/cadastrarservico" className="hover:text-gray-500 font-medium">Cadastrar Serviço</Link></li>
                <li><Link to="/cadastrarcategoria" className="hover:text-gray-500 font-medium">Cadastrar Categoria</Link></li>
              </>
            )}
            <li>
              <Link to="/servicos" className="hover:text-gray-500 font-medium">Serviços</Link>
            </li>
            <li>
              <Link to="/categorias" className="hover:text-gray-500 font-medium">Oferecemos</Link>
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
              <Link to="" className="border rounded-xl border-slate-300 p-1 hover:shadow-md hover:bg-bright-turquoise-100 hover:border-magenta-/-fuchsia-200"><Basket size={30} weight="light" /></Link>
              <Link to="/login" onClick={logout} className='border rounded-xl border-slate-300 p-1 hover:shadow-md hover:bg-bright-turquoise-100 hover:border-magenta-/-fuchsia-2'><SignOut size={30} weight="regular" /></Link>
              {/* acrescentar icone carrinho de compras */}
            </div>
          ) : (
            <div>
              <button className="bg-magenta-/-fuchsia-900 text-white hover:bg-bright-turquoise-200 text-1xl hover:text-magenta-/-fuchsia-900 hover:duration-500 px-5 py-2 rounded-full font-medium">
                <Link to="/login">Login</Link>
              </button>

            </div>
          )}
        </div>
        {/* <List size={30} weight="regular" className="cursor-pointer md:hidden"/> */}
      </nav>
    </>
  )
}



{/* <div className="w-full p-4 flex flex-1 justify-between items-center bg-white shadow">
          <div>
            <Link to="/home">
              <span id="logo" className="uppercase font-semibold text-2xl">Nísia Floresta</span>
            </Link>
          </div>

          <div className="flex gap-4">
            <Link to="/servicos" className="hover:text-fuchsia-500">Serviços</Link>
            <Link to="/categorias" className="hover:text-fuchsia-500">Oferecemos</Link>
            <Link to="/sobre" className="hover:text-fuchsia-500">Quem somos</Link>

            {usuario.tipo === "adm" && (
              <>
                <Link to="/cadastrarservico" className="hover:text-fuchsia-500">Cadastrar Serviço</Link>
                <Link to="/cadastrarcategoria" className="hover:text-fuchsia-500">Cadastrar Categoria</Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {usuario.token !== "" ? (
              <>
                <Link to="/perfil" className="hover:text-fuchsia-500"><User size={30} weight="light" /></Link>
                <Link to="/carrinho" className="hover:text-fuchsia-500"><Basket size={30} weight="light" /></Link>
                <Link to="/home" className="hover:text-fuchsia-500" onClick={logout}><SignOut size={30} weight="light" /></Link>
              </>
            ) : (
              <Link to="/login" className="hover:text-fuchsia-500">Login</Link>
            )}
          </div>
        </div> */}