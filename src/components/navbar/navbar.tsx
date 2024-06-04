import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { SignOut, User } from "@phosphor-icons/react";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert(`Você foi desconectado!`);
    navigate("/login");
  }

  return (
    <>
      <div className="w-full bg-teal-600 text-white flex justify-center font-bold items-center">
        <div className="container flex items-center justify-between text-lg">

          <Link to="/home" className="h-24 flex items-center">
            <img src="" alt="LOGO DO PROJETO" />     {/* Colocar imagem do logo */}
          </Link>

          <div className="flex gap-4">
            <div className="hover:underline"></div>
            <Link to="/servicos">Servicos </Link>

            <Link to="/cadastroServico" className="hover:underline">
              Cadastrar Serviço
            </Link>

            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>

            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>

            <Link to="/contato" className="hover:underline">
              Contato
            </Link>

            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <div className='rounded px-5 py-1.5 bg-fuchsia-900 hover:bg-teal-100 font-bold hover:text-fuchsia-800 hover:duration-500' ><User size={30} weight="bold" /></div>

            <Link to="/login" onClick={logout} className='rounded px-5 py-1.5 bg-fuchsia-900 hover:bg-teal-100 font-bold hover:text-fuchsia-800 hover:duration-500'>
              <SignOut size={30} weight="bold" />
            </ Link>

            <div className="hover:underline">Perfil</div>

            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div >
      </div>
    </>
  );
}

export default Navbar;
