import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Servico {
  id: number;
  nome: string;
  duracao: string;
  preco: number;
  vagas: number;
  gratuidade: boolean;
  foto: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
