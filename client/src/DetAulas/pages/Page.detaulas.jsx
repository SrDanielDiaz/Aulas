import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DetAulaCard from '../components/DetAulaCard'
import { useDetAulas } from '../context/DetAulaContext'
// import Search from "../../components/Search";
function Aulas() {
  const navigate = useNavigate()
  const { detAulas, loadDetAulas } = useDetAulas()
  useEffect(() => {
    // const loadDetAulasFn = async () => {
    //   await loadDetAulas()
    // }
    loadDetAulas()
  }, [])
  return (
    <div>
      <div className='grid grid-cols-2 justify-between items-center gap-3'>
        <p className='text-center bg-zinc-800  rounded-md p-1  font-extrabold mb-3'>
          DetAulas
        </p>
        <a
          className='bg-zinc-600 p-1 text-center rounded-md w-full border-none font-semibold mb-3 cursor-pointer'
          onClick={() => navigate('/detaulas/add')}
        >
          Crear DetAula
        </a>
      </div>
      {detAulas.length > 0 ? (
        <div>
          <div className='grid grid-cols-3 text-center mt-2'>
            <p>Id</p>
            <p>Aula</p>
            <p>Motivo</p>
            <p />
          </div>
          {detAulas.map((detaula, i) => (
            <DetAulaCard detaula={detaula} key={i} />
          ))}
        </div>
      ) : (
        <p className='text-center'>No hay aulas</p>
      )}
    </div>
  )
}
export default Aulas
