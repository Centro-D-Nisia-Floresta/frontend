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
        
        <div className='bg-teal-500 min-h-[80vh] pt-1'>
        
            <div className='bg-white container mx-auto mt-4 rounded-xl overflow-hidden'>
                <img className='w-full h-72 object-cover border-b-8 border-white bg-white' src="" alt="Capa do Perfil" />
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-fuchsia-900 relative z-10' />
            <div className="relative mt-[-6rem] h-72 flex flex-col bg-white text-white text-2xl items-center justify-center">
                <p className='text-black'>Nome: {usuario.nome} </p>
                <p className='text-black'>Email: {usuario.usuario}</p>
            </div>
        </div>
        </div>
      )


    
}

export default Perfil;