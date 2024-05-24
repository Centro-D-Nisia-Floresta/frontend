import Servico from "./Servico";

export default interface Categoria {
  id: number;
  tipoServico: string;
  foto: string;
  servico: Servico | null;
}
