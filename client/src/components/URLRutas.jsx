import { Link } from 'react-router-dom'
import { useIndex } from '../context/IndexContext'
function URLRutas() {
  const { setOpen } = useIndex()

  const rutas = [
    { name: 'Aulas', path: '/aulas' },
    { name: 'DetAulas', path: '/detaulas' }
  ]
  return (
    <div className='items-center justify-center w-full mx-auto'>
      <div
        className='justify-center items-center flex flex-col gap-y-5 overflow-y-auto overflow-x-hidden h-screen
      '
      >
        <li className='mb-16 bg-black' />
         
      <img src="logo.png" alt="" className='' />

        {rutas.map((ruta, i) => (
          <li
            key={i}
            className='hover:scale-125 transition-transform min-w-full '
          >
            <Link
              to={ruta.path}
              onClick={() => setOpen(false)}
              className=' block text-center py-3 px-5 rounded-lg bg-sky-500 '
            >
              {ruta.name}
            </Link>
          </li>
        ))}
      </div>
    </div>
  )
}

export default URLRutas
