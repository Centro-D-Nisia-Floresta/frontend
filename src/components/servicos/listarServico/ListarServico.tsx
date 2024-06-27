import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Servico from "../../../models/Servico";
import CardServico from "../cardServico/CardServico";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListarServico() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token || "";
  const [servico, setServico] = useState<Servico[]>([]);

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Acesso restrito. Por favor, faça login!", "info");
      navigate("/login");
    }
  }, [token]);

  async function buscarServico() {
    try {
      await buscar("/servicos", setServico, {
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
    buscarServico();
  }, [servico.length]);

  return (
    <>
      <div className="bg-neutral-200">
        <div className=" bg-cover items-center">
          <img className=" object-cover opacity-50 " src="https://ik.imagekit.io/rx2wvtnsm/Categorias_imagens/51C19256-87CC-4F67-956F-998E543177F3_1_201_a%20(2).png?updatedAt=1719496536562" alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 flex items-center justify-center">
        <div className="container w-full m-4 p-20 mt-5">
          <div className="flex flex-col gap-3 p-3 items-center">
            <section className="text-center  mx-10  md:text-left md:p-0">
              <h1 className="text-center text-5xl font-thin">Para educar, capacitar e impulsionar</h1>
            </section>
            <section className="container mx-auto py-20 mb-20">
              <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg shadow-sky-950">
                    <div className="flex justify-center mb-8">
                      <div className="text-center">
                        <img className="mx-auto w-19 h-19 mb-4" src="https://ik.imagekit.io/rx2wvtnsm/Centro%20de%20Desenvolvimento%20(6).png?updatedAt=1719342095222" alt="" />
                        <h2 className="text-xl font-bold mt-4">Fundada em 2024</h2>
                        <p className="mt-2">Nossa plataforma oferece uma variedade de recursos para apoiar o seu desenvolvimento pessoal e profissional na área de tecnologia.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg  shadow-lg shadow-sky-950">
                    <div className="flex justify-center mb-10">
                      <div className="text-center">
                        <img className="mx-auto w-18 h-18 mb-4" src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Teamwork.png?updatedAt=1717618544997" alt="" />
                        <h2 className="text-xl font-bold mt-4">Formação</h2>
                        <p className="mt-2">Oferecemos cursos, mentorias, palestras e workshops. Participe para adquirir novas habilidades técnicas e de soft skills.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/3 p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg shadow-sky-950">
                    <div className="flex justify-center mb-8">
                      <div className="text-center">
                        <img className="mx-auto w-18 h-18 mb-4 w-" src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Work_from_Home_2.png?updatedAt=1717618545240" alt="" />
                        <h2 className="text-xl font-bold mt-4">Vamos Juntas!</h2>
                        <p className="mt-2">Aproveite os nossos conteúdos selecionados para capacitar meninas e mulheres do Brasil.</p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <h1 className="text-5xl  mt-4 mb-0 font-thin">Conheça Nossos</h1>
            <h2 className="text-8xl  mt-4 mb-10 font-thin">Serviços</h2>
          </div>

          <div className="flex flex-col min-h-[70vh]">
            <div className="flex justify-center gap-4">
              {servico.map((servico) => (
                <CardServico key={servico.id} servico={servico} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
