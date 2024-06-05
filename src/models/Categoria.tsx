import Servico from "./Servico";

export default interface Categoria {
  id: number;
  tipoServico: string;
  descricao: string;
  servico: Servico | null;
}
