import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlerta } from '../../utils/ToastAlerta'

export default function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate("/");
        }
    }, [usuario.token])

    return (
        <>
            <div className="container w-full m-4 p-6 mt-5">
                <div className="container mx-auto mt-4 rounded-xl overflow-hidden">
                    <img className="w-screen h-60 object-cover border-b-8 bg-fuchsia-200" src="https://ik.imagekit.io/rx2wvtnsm/Dayflow_-_Socializing_2.png" alt="Capa do Perfil" />

                    <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-2 relative z-10' />
                    
                    <div className="relative mt-[-6rem] h-60 flex flex-col text-2xl items-center justify-center bg-gradient-to-r from-bright-turquoise-400 to-fuchsia-500">
                        <div className="text-center mt-8">
                            <p>{usuario.nome} </p>
                            <p>{usuario.usuario}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}