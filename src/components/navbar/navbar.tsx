import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

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
      <div className="w-full bg-sky-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Centro D. Nisia Floresta
          </Link>

          <div className="flex gap-4">
            <div className="hover:underline">Cursos</div>
            <Link to="/cadastro" className="hover:underline">
              Cadastrar
            </Link>
            <Link to="/sobre" className="hover:underline">
              Sobre
            </Link>
            <Link to="/contato" className="hover:underline">
              Contato
            </Link>
            <div className="hover:underline">Perfil</div>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
