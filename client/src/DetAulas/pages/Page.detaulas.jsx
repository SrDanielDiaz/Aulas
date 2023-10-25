import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DetAulaCard from '../components/DetAulaCard'
import { useDetAulas } from '../context/DetAulaContext'
// import Search from "../../components/Search";
function Aulas() {
  const navigate = useNavigate()
  const { detAulas, loadDetAulas, filterDetAulas } = useDetAulas()
  useEffect(() => {
    loadDetAulas()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const value = (data.get('search')).toLowerCase()
    await filterDetAulas(value)
  }
  return (
    <div>
      <div className='grid grid-cols-2 justify-between items-center gap-3'>
        <p className='text-center rounded-md p-1  font-extrabold mb-3'>
          DetAulas
        </p>
        <a
          className='bg-sky-500 text-white p-1 text-center rounded-md w-full border-none font-semibold mb-3 cursor-pointer'
          onClick={() => navigate('/detaulas/add')}
        >
          Crear DetAula
        </a>
      </div>
      <form className='flex' onSubmit={handleSearch}>
        <input
          className='w-full rounded-l-md p-2 rounded-r-none'
          type='text'
          placeholder='Buscar DetAula'
          name='search'
          autoFocus
        />
        <button type='submit' className='rounded-r-md bg-sky-500 px-2 rounded-l-none'>
          Buscar
        </button>
      </form>
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
