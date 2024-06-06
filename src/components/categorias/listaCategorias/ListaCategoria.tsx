import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardcategorias/CardCategorias";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import ModalCategorias from "../modalCategorias/ModalCategorias";

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

      <div className="min-h-[80vh]">
        <div className="items-center justify-center flex">
          {categorias.length === 0 && <ColorRing visible={true} height="100" width="100" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['#ffffff', '#99f6e4', '#86198f', '#99f6e4', '#ffffff']} />}
        </div>

        <div className="bg-teal-500 grid grid-cols-2 items-center justify-center w-full pb-[75px] pt-[75px]">
          <div className="flex items-center justify-center">
            <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Work_from_Home.png?updatedAt=1717618544389" alt="IMAGEM DE CATEGORIA" className="w-2/3" />
          </div>

          <div className="container flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center pb-6">
              <h1 className="text-black font-bold text-5xl pb-4">Categorias</h1>
              <p>Confira todas as nossas categorias</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6">
              {categorias.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModalCategorias />
    </>
  );
}

export default ListaCategorias;
