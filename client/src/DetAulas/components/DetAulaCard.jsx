// import { useLocation, useNavigate } from 'react-router-dom'
// id, aula, fechainicio, fechafinal, done, motivo
function AulaCard({ detaula }) {
  // const { pathname } = useLocation()
  // const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(aulaVenta);
  // }, [aulaVenta]);
  return (
    <div className='my-2'>
      <button
        className='bg-zinc-600 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer flex justify-evenly'
        // onClick={() => (console.log(pathname))}
        onClick={() => {
          console.log('🚀 ~ file: DetAulaCard.jsx:28 ~ AulaCard ~ onClick:', detaula.id)
        }}
      >
        <p>{detaula.id}</p>
        <p>{detaula.aula}</p>
        <p>{detaula.motivo}</p>
      </button>
      <div className='grid grid-cols-2 text-center'>
        <p>{detaula.fechainicio}</p>
        <p>{detaula.fechafinal}</p>
      </div>
    </div>
  )
}
export default AulaCard
