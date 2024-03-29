import { Link } from 'react-router-dom'
import { useIndex } from '../context/IndexContext.jsx'
import Rutas from './Rutas.jsx'
function Navbar() {
  const openSVG = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
      />
    </svg>
  )
  const { open, setOpen } = useIndex()
  return (
    <header className='bg-sky-500 p-4 w-full fixed top-0'>
      <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%]'>
        <Link to='/' className='py-1 text-white'>
          AULAS
        </Link>
        <>
          <button onClick={() => setOpen(true)}> {openSVG}</button>
          <dialog
            open={open}
            onClose={() => setOpen(true)}
            className='overflow-auto'
          >
            <Rutas />
          </dialog>
        </>
      </div>
    </header>
  )
}
export default Navbar
