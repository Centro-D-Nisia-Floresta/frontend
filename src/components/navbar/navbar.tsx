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
      <div className="w-full bg-teal-600 text-white flex justify-center font-semibold items-center">
        <div className="container flex items-center justify-between text-lg">

          <Link to="/home" className="h-24 flex items-center">
            <img className=" h-[350px]" src="https://ik.imagekit.io/rx2wvtnsm/Nisa%20Floresta%20Branco?updatedAt=1717598564578" alt="LOGO DO PROJETO" />     {/* Colocar imagem do logo */}
          </Link>

          <div className="flex items-center justify-center gap-4">
            <Link to="/servicos" className="hover:underline">Serviços </Link>

            <Link to="/categorias" className="hover:underline">Categorias </Link>

            <Link to="/cadastroServico" className="hover:underline">
              Cadastrar Serviço
            </Link>

            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>

            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <Link to="/perfil" className='rounded px-2 py-1 bg-fuchsia-900 hover:bg-teal-100 font-bold hover:text-fuchsia-800 hover:duration-500' ><User size={30} weight="regular" /></Link>

            <Link to="/login" onClick={logout} className='rounded px-2 py-1 bg-fuchsia-900 hover:bg-teal-100 font-bold hover:text-fuchsia-800 hover:duration-500'>
              <SignOut size={30} weight="regular" />
            </ Link>
          </div>
        </div >
      </div>
    </>
  );
}

export default Navbar;
