// import { useLocation, useNavigate } from 'react-router-dom'

import { useDetAulas } from '../context/DetAulaContext';

// id, aula, fechainicio, fechafinal, done, motivo
function AulaCard({ detaula }) {
  const { deleteDetAula } = useDetAulas()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const fechainicio = new Date(detaula.fechainicio);
  const fechafinal = new Date(detaula.fechafinal);

  return (
    <div className='my-2'>
      <button
        className='bg-sky-500 text-white hover:bg-red-900 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer flex justify-evenly'
        onClick={async () => {
          const confirm = window.confirm('¿Estás seguro de eliminar este DetAula?')
          if (!confirm) return

          console.log('🚀 ~ file: DetAulaCard.jsx:28 ~ AulaCard ~ onClick:', detaula.id)
          await deleteDetAula(detaula.id)
        }}
      >
        <p>{detaula.id}</p>
        <p>{detaula.aula}</p>
        <p>{detaula.motivo}</p>
      </button>
      <div className='grid grid-cols-2 text-center'>
        <p>{fechainicio.toLocaleDateString('es-CO', options)}</p>
        <p>{fechafinal.toLocaleDateString('es-CO', options)}</p>
      </div>
    </div>
  )
}
export default AulaCard
