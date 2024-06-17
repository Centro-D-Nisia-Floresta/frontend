import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Servico from "../../../models/Servico";
import { AuthContext } from "../../../contexts/AuthContext";
import CardServico from "../cardServico/CardServico";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListarServico() {
  const navigate = useNavigate();
  const {usuario, handleLogout} = useContext(AuthContext);
  const token = usuario?.token || "";
  const [servico, setServico] = useState<Servico[]>([]);

  // faz com que as pessoas sem login não possam visualizar
  // useEffect(() => {
  //   if (token === "") {
  //     ToastAlerta("Acesso restrito. Por favor, faça login!", "info");
  //     navigate("/login");
  //   }
  // }, [token]);

  async function buscarServico() {
    try {
      await buscar("/servicos", setServico, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // ToastAlerta("O token expirou, favor logar novamente!", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servico.length]);

  return (
    <>
      <div className="container w-full m-4 p-6 mt-5">
        <div className="flex flex-col gap-3 p-3 items-center">
          <h1 className="text-4xl font-semibold">Serviços</h1>
          <p className="text-justify mb-4">Oferecemos cursos, palestras, workshops e mentorias para capacitar mulheres e criar novas oportunidades. Também oferecemos alguns desses serviços de forma gratuita para alcançar pessoas de baixa renda e, assim, aumentar cada vez mais a inclusão dessas mulheres no mercado de trabalho.</p>
        </div>

        <div className="min-h-[70vh]">
          {servico.length === 0 && (
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-medium p-2 mt-7">Nenhum serviço foi encontrado!</h1>
            </div>
          )}

          <div className="container flex justify-center gap-5">
            {servico.map((servico) => (
              <CardServico key={servico.id} servico={servico} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}