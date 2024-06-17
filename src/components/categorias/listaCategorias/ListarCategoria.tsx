import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CardCategoria from "../cardCategorias/CardCategorias";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";
import ModalCategorias from "../modalCategorias/ModalCategorias";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListarCategorias() {
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
      if (error.toString().includes("401")) {
        // ToastAlerta("O token expirou, favor logar novamente!", "info")
        handleLogout();
      }
    }
  }

  // useEffect(() => {
  //   if (token === "") {
  //     ToastAlerta("Acesso restrito. Por favor, faça login!", "info");
  //     navigate("/login");
  //   }
  // }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className="container w-full m-4 p-6 mt-5">
        <div className="flex items-center justify-center gap-4">
          <div className="w-full flex justify-center">
            <img src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Work_from_Home.png?updatedAt=1717618544389" className="w-96 rounded-md" />
          </div>

          <div className="flex flex-col justify-center leading-6 ">
            <h1 className="text-4xl font-semibold p-2 mb-2">O que você vai encontrar aqui</h1>
            <p className="text-justify">Nossa plataforma oferece uma variedade de recursos para apoiar seu desenvolvimento profissional e pessoal. Temos cursos detalhados que cobrem uma ampla gama de tópicos, desde habilidades técnicas até desenvolvimento pessoal. Nossas palestras são ministradas por especialistas da indústria, proporcionando insights valiosos e tendências atuais do mercado. Participando de nossos workshops, você terá a oportunidade de aprender de forma prática e interativa, enquanto nossas mentorias personalizadas ajudam a orientar seu crescimento profissional com conselhos e suporte individualizados.</p>
          </div>
        </div>

        <div className="container flex flex-col items-center justify-center">
          <h2 className="text-3xl font-medium">Categorias</h2>
          <p className="text-lg italic mb-10">Explore nossas categorias e encontre o caminho certo para alcançar seus objetivos!</p>

          <div className="min-h-[70vh]">
            {categorias.length === 0 && (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-medium p-2 mt-7">Nenhuma categoria foi encontrada!</h1>
              </div>
          )}

          <div className="container flex justify-center gap-5">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}