import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AulaCard from '../components/AulaCard'
import { useAulas } from '../context/AulaContext'
// import Search from "../../components/Search";
function Aulas() {
  const navigate = useNavigate()
  const { aulas, loadAulas } = useAulas()
  useEffect(() => {
    loadAulas()
  }, [])
  return (
    <div>
      <div className='grid grid-cols-2 justify-between items-center gap-3'>
        <p className='text-center rounded-md p-1  font-extrabold mb-3'>
          Aulas
        </p>
        <a
          className='bg-sky-500 text-white p-1 text-center rounded-md w-full border-none font-semibold mb-3 cursor-pointer'
          onClick={() => navigate('/aulas/add')}
        >
          Crear Aula
        </a>
      </div>
      {aulas.length > 0 ? (
        <div>
          {/* <Search /> */}
          <div className='flex text-center mt-2'>
            <p className='flex-1'>Id</p>
            <p className='flex-1'>Nombre</p>
            <p className='flex-1'>Tipo</p>
            <p />
          </div>
          {aulas.map((aula) => (
            <AulaCard key={aula.id} aula={aula} />
          ))}
        </div>
      ) : (
        <p className='text-center'>No hay aulas</p>
      )}
    </div>
  )
}
export default Aulas
