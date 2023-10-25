import { useDetAulas } from '../context/DetAulaContext'
function AulaCard({ aulas }) {
  const { setDetAula } = useDetAulas()
  return (
    <>
      {aulas?.length > 0 ? (
        <div className='w-full'>
          <div className='grid grid-cols-3 text-center mt-2'>
            <p>Id</p>
            <p>Nombre</p>
            <p>Tipo</p>
            <p />
          </div>
          {aulas.map((aula) => (
            <div className='my-2' key={aula.id}>
              <button
                className='block bg-zinc-600 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer'
                onClick={() => {
                  setDetAula((state) => {
                    return { ...state, aula }
                  })
                }}
              >
                {aula.id}
              </button>
              <div className='grid grid-cols-2 text-center'>
                <p>{aula.id}</p>
                <p>{aula.tipo}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center'>No hay aulas</p>
      )}
    </>
  )
}
export default AulaCard
