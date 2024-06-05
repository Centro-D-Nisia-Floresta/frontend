import Servico from "./Servico";

export default interface Usuario {
  id: number;
  nome: string;
  tipo: string;
  usuario: string;
  senha: string;
  dataNascimento: string;
  foto: string;
  servico: Servico | null;
}
