import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Servico from "../../../models/Servico";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import CardServico from "../cardServico/CardServico";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaServicos() {
  const navigate = useNavigate();
  const [servico, setServico] = useState<Servico[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

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
      {/* {servico.length === 0 && (
                animação
            )} */}

      <div className="">
        {servico.map((servico) => (
          <CardServico key={servico.id} servico={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServicos;