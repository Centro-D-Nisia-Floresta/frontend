import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { AuthContext } from "../../../contexts/AuthContext";

import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategorias from "../cardcategorias/CardCategorias";

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
        ToastAlerta("O token expirou, favor logar novamente!", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Acesso restrito. Por favor, faça login!", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
      <div className="bg-gradient-to-b from-neutral-200 to-zinc-300">
        <div className="container mx-auto mt-0 grid grid-cols-1   items-center">
          <div className="relative">
            {/* <img className="mx-auto object-cover opacity-60" src="https://ik.imagekit.io/rx2wvtnsm/Categorias_imagens/7BFC4D64-E2A2-4449-AF2C-0B84E8B5912C_1_201_a.jpeg?updatedAt=1719439788394" alt="" /> */}
            <img className=" mx-auto object-cover opacity-50" src="https://ik.imagekit.io/rx2wvtnsm/Categorias_imagens/8F86CADA-DD08-4189-B453-B593404F6871_1_201_a.jpeg?updatedAt=1719456309610" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 flex items-center justify-center">
        <div className="container w-full m-4 p-8 mt-10 ">
          <div className="container flex flex-col items-center justify-center mt-10">
            <h1 className="text-5xl  mt-4 mb-0 font-thin">Conheça Nossas</h1>
            <h2 className="text-8xl  mt-4 mb-10 font-thin">Categorias</h2>

            <div className="flex flex-col min-h-[70vh]">
              <div className="flex flex-wrap justify-center gap-4">
                {categorias.map((categoria) => (
                  <CardCategorias key={categoria.id} categoria={categoria} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
