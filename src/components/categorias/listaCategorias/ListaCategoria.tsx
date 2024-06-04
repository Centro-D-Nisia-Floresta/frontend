import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

function ListaCategorias() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper mx-auto" />}
      <div className="grid grid-cols-2 items-center justify-center w-full pb-2">
        <div className="flex items-center justify-center">
          <img src="http://i.imgur.com/VpwApCU.png" alt="IMAGEM DE CATEGORIA" className="w-2/3" />
        </div>
        <div className="container flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center pb-6">
            <h1 className="text-black font-bold text-3xl">Categorias</h1>
            <p>Confira todas as nossas categorias</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
