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
            <div className="bg-gradient-to-b from-sky-100 to-magenta-/-fuchsia-100 w-full p-10">
            <div className="">
                <div className="container mx-auto mt-5 mb-5 rounded-xl overflow-hidden">
                    <img className="w-screen h-60 object-cover border-b-4 opacity-50" src="https://ik.imagekit.io/rx2wvtnsm/0FB034EC-A283-4605-A909-89DFFD560555_1_201_a.jpeg?updatedAt=1719244595888" alt="Capa do Perfil" />

                    <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-2 relative z-10 border-fuchsia-100 object-cover h-56' />
                    
                    <div className="relative mt-[-6rem] h-60 flex flex-col text-2xl items-center justify-center bg-gradient-to-b from-sky-200 to-magenta-/-fuchsia-200">
                        <div className="text-center mt-8">
                            <p>{usuario.nome} </p>
                            <p>{usuario.usuario}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}