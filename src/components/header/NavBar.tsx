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
      <div className="w-full p-3 flex justify-around items-center bg-gradient-to-r from-fuchsia-400 to-bright-turquoise-300">
        <Link to="/home">
          <span id="logo" className="uppercase font-semibold text-lg">Nísia Floresta</span>
        </Link>

        <div className="flex gap-3">
          <Link to="/servicos" className="hover:text-fuchsia-500">Serviços</Link>
          <Link to="/categorias" className="hover:text-fuchsia-500">Ofecemos</Link>
          <Link to="/sobre" className="hover:text-fuchsia-500">Quem somos</Link>
          
          {usuario.tipo === "adm" && (
            <>
              <Link to="/cadastrarservico" className="hover:text-fuchsia-500">Cadastrar Serviço</Link>
              <Link to="/cadastrarcategoria" className="hover:text-fuchsia-500">Cadastrar Categoria</Link>
            </>
          )}

          {usuario.token !== "" ? (
            <>
              <Link to="/perfil" className="hover:text-fuchsia-500"><User size={30} weight="light" /></Link>
              <Link to="/carrinho" className="hover:text-fuchsia-500"><Basket size={30} weight="light"/></Link>
              <Link to="/home" className="hover:text-fuchsia-500" onClick={logout}><SignOut size={30} weight="light" /></Link>
            </>
          ) : 
            <Link to="/login" className="hover:text-fuchsia-500">Login</Link>
          }
        </div>
      </div> 
    </>
  )
}