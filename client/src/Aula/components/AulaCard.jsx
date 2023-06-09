/* eslint-disable indent */
import { useLocation, useNavigate } from 'react-router-dom'
function AulaCard({ aula }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(aulaVenta);
  // }, [aulaVenta]);
  return (
    <div className='my-2'>
      <button
        className='block bg-zinc-600 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer'
        // onClick={() => (console.log(pathname))}
        onClick={() => {
          if (pathname === '/aulas') {
            navigate(`/aulas/edit/${aula.id}`)
          }
        }}
      >
        {aula.id}
      </button>
      <div className='grid grid-cols-2 text-center'>
        <p>{aula.id}</p>
        <p>{aula.tipo}</p>
      </div>
    </div>
  )
}
export default AulaCard
