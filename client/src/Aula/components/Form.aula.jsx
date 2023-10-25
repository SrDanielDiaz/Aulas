import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAulas } from '../context/AulaContext'

const FormBasic = () => {
  const navigate = useNavigate()
  const { createAula } = useAulas()
  const [aula] = useState({
    tipo: 1,
    nombre: ''
  })

  const { register, handleSubmit, reset } = useForm({ defaultValues: aula })
  const customSubmit = async(data) => {
    await createAula(data)
    navigate('/aulas')
  }

  return (
    <>
      <form onSubmit={handleSubmit(customSubmit)}>
        <div className='gap-x-5 flex items-center'>
          <label className='flex-1'>Tipo del Aula</label>
          <input className='flex-1' required type='number' {...register('tipo')} />
        </div>
        <div className='gap-x-5 flex items-center mt-5'>
          <label className='flex-1'>Numero del aula</label>
          <input className='flex-1' required type='text' name='nombre' id='nombre' {...register('nombre')} />
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
