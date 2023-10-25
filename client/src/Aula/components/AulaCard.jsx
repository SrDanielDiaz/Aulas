import { useAulas } from '../context/AulaContext'
function AulaCard({ aula }) {
  const { deleteAula } = useAulas()

  return (
    <div className='my-2'>
      <button
        className='flex justify-evenly bg-sky-500 text-white text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer hover:bg-red-900'
        onClick={async() => {
          window.confirm('¿Estas seguro de eliminar el aula?') &&
            await deleteAula(aula.id)
        }}
      >
        <p className='flex-1'>{aula.id}</p>
        <p className='flex-1'>{aula.nombre}</p>
        <p className='flex-1'>{aula.tipo}</p>
      </button>

    </div>
  )
}
export default AulaCard
