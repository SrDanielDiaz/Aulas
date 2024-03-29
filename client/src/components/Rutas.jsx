
import { useIndex } from '../context/IndexContext.jsx'
import URLRutas from './URLRutas.jsx'
function Rutas() {
  const closeSVG = (
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
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
  const { setOpen } = useIndex()
  return (
    <div className='flex fixed top-0 left-0 flex-col items-center justify-center gap-6 bg-sky-500 w-full text-white'>
      <ul className='w-11/12'>
        <URLRutas />
      </ul>
      <button
        className='flex cursor-pointer hover:scale-150 transition-transform w-50  mt-5 justify-center items-center'
        onClick={() => setOpen(false)}
      >
        {closeSVG}
      </button>
    </div>
  )
}
export default Rutas
