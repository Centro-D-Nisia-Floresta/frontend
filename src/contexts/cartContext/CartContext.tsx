import { createContext, ReactNode, useState } from "react";
import Servico from "../../models/Servico";
import { ToastAlerta } from "../../utils/ToastAlerta";

interface CartContextProps {
    adicionarProduto: (servico: Servico) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Servico[]
    quantidadeItems: number
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<Servico[]>([]);
    const quantidadeItems = items.length;

    function adicionarProduto(servico: Servico) {
        const indice = items.find(items => items.id === servico.id)
        if(indice !== undefined){
            ToastAlerta("Este Produto já foi Adicionado!", "info")
        }else{
            setItems(state => [...state, servico])
            ToastAlerta("Produto Adicionado!", "sucesso")
        }
    }

    function removerProduto(servicoId: number) {
        const indice = items.findIndex(items => items.id === servicoId)
        let novoCart = [...items]

        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)
        }
    }

    function limparCart() {
        ToastAlerta("Compra Efetuada com Sucesso", "sucesso")
        setItems([])
    }

    return (
        <CartContext.Provider 
            value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems }}
        >
            {children}
        </CartContext.Provider>
    )
}