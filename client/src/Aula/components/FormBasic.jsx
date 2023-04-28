import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAulas } from '../context/AulaContext'

const FormBasic = () => {
  const { createAula } = useAulas()
  const [aula, setAula] = useState({
    tipo: '',
    nombre: ''
  })
  useEffect(() => {
    // const today = new Date().toJSON().slice(0, 10)
    const loadAula = async () => {
      setAula({
        tipo: 1,
        nombre: 100
      })
    }
    loadAula()
    console.log(aula)
  }, [])
  const { register, handleSubmit, reset } = useForm({ defaultValues: aula })
  const customSubmit = (data) => {
    console.log(data)
    createAula(aula)
  }
  useEffect(() => {
    reset(aula)
  }, [])
  return (
    <>
      <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
        <div className='gap-x-5 flex items-center'>
          <label className='flex-1'>Tipo</label>
          <input className='flex-1' required type='number' {...register('tipo')} />
        </div>
        <div className='gap-x-5 flex items-center mt-5'>
          <label className='flex-1'>Nombre</label>
          <input className='flex-1' type='text' {...register('nombre')} />
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
