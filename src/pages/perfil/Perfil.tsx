import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate("/");
        }
    }, [usuario.token])

    return (
        <div className="">

            <img className="" src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div className="">
                <p>Nome: {usuario.nome} </p>
                <p>Usuário: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil;