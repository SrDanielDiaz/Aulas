import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AulaCard from '../../Aula/components/AulaCard'
import { useAulas } from '../../Aula/context/AulaContext'
import { useDetAulas } from '../context/DetAulaContext'

const FormBasic = () => {
  const { createDetAula } = useDetAulas()
  const [aula] = useState({
    tipo: 1,
    nombre: ''
  })

  const { handleSubmit, reset } = useForm({ defaultValues: aula })
  const customSubmit = (data) => {
    console.log(data)
    createDetAula(aula)
  }
  const { aulas, loadAulas } = useAulas()
  useEffect(() => {
    loadAulas()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(customSubmit)}>
        <label className='block text-center'>Aulas</label>
        {aulas.length > 0 ? (
          <div>
            <div className='grid grid-cols-3 text-center mt-2'>
              <p>Id</p>
              <p>Nombre</p>
              <p>Tipo</p>
              <p />
            </div>
            {aulas.map((aula) => (
              <AulaCard key={aula.id} aula={aula} />
            ))}
          </div>
        ) : (
          <p className='text-center'>No hay aulas</p>
        )}
        <div className='gap-x-5 flex items-center mt-5'>
          <input type='time' />
          <input type='date' />
          <input type='time' />
        </div>
        <div className='gap-x-5 flex items-center mt-5'>
          <button className='flex-1 bg-zinc-500' type='submit'>Enviar</button>
          <button className='flex-1 bg-red-900' type='button' onClick={() => reset()}>Cancelar</button>
        </div>
      </form>
    </>
  )
}

export default FormBasic
