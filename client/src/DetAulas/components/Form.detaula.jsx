import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAulas } from '../../Aula/context/AulaContext'
import { useDetAulas } from '../context/DetAulaContext'
import AulaCard from './SelectedAulaCard'

const FormBasic = () => {
  const navigate = useNavigate()

  const { detAula, setDetAula, createAula, loadDetAulas, detAulas } =
    useDetAulas()
  const [error, setError] = useState(false)

  const [ocupada, setOcupada] = useState()

  const { register, handleSubmit, reset } = useForm()
  const customSubmit = async (data) => {
    if (detAula.aula) {
      loadDetAulas()

      const fechainicio =
        data['inicio-date'] + 'T' + data['inicio-time'] + ':00.000'
      const fechafinal =
        data['final-date'] + 'T' + data['final-time'] + ':00.000'
      const { id: aulaId } = detAula.aula

      const detaulasOcupadas = detAulas.filter((detaula) => {
        return detaula.aula.name === detAula.aula.name
      })

      if (detaulasOcupadas.length > 0) {
        const detaulaOcupada = detaulasOcupadas.find((detaula) => {
          const inicio = new Date(detaula.fechainicio)
          const final = new Date(detaula.fechafinal)
          const inicio2 = new Date(fechainicio)
          const final2 = new Date(fechafinal)
          return (
            (inicio2 >= inicio && inicio2 <= final) ||
            (final2 >= inicio && final2 <= final)
          )
        })
        if (detaulaOcupada) {
          setOcupada(
            {
              fechainicio: detaulaOcupada.fechainicio,
              fechafinal: detaulaOcupada.fechafinal,
              motivo: detaulaOcupada.motivo
            }
          )
          return window.alert(
            'Aula ocupada de ' +
              detaulaOcupada.fechainicio +
              ' a ' +
              detaulaOcupada.fechafinal +
              ' por ' +
              detaulaOcupada.motivo +
              ''
          )
        }
      }
      const aulaToSend = {
        fechainicio,
        fechafinal,
        aula: aulaId,
        done: false,
        motivo: data.motivo
      }
      console.log(detAula)
      await createAula(aulaToSend)
      setDetAula((state) => {
        return { ...state, aula: '' }
      })
      navigate('/detAulas')
    } else {
      setError(true)
    }
  }
  const { aulas, loadAulas } = useAulas()
  useEffect(() => {
    loadAulas()
  }, [])
  useEffect(() => {
    if (detAula.aula) {
      setError(false)
    }
  }, [detAula.aula])
  return (
    <>
      {error && (
        <div className='bg-yellow-200 block w-full py-2 text-center font-semibold text-black rounded-md'>
          Seleccione un aula!
        </div>
      )}
      {!!ocupada && (
        <div className='bg-red-200 block w-full py-2 text-center font-semibold text-black rounded-md'>
          <h2>Aula ocupada desde!</h2>
          {/* show the time that is busy */}
          <p>
            <br /> {formatDate(ocupada.fechainicio)} <br />a {formatDate(ocupada.fechafinal)} <br /> por {ocupada.motivo}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit(customSubmit)} className='w-full'>
        <div className='gap-x-5 flex items-center mt-5'>
          <label>Inicio</label>
          <input
            required
            className='flex-1'
            type='date'
            {...register('inicio-date')}
          />
          <input
            required
            className='flex-1'
            type='time'
            {...register('inicio-time')}
          />
        </div>

        <div className='gap-x-5 flex items-center mt-5'>
          <label>Final</label>
          <input
            required
            className='flex-1'
            type='date'
            {...register('final-date')}
          />
          <input
            required
            className='flex-1'
            type='time'
            {...register('final-time')}
          />
        </div>

        <input
          type='text'
          className='my-2 w-full'
          placeholder='Motivo'
          name='motivo'
          {...register('motivo')}
        />

        <div className='gap-x-5 flex items-center mt-5'>
          <button className='flex-1 bg-zinc-500' type='submit'>
            Enviar
          </button>
          <button
            className='flex-1 bg-red-900'
            type='button'
            onClick={() => reset()}
          >
            Cancelar
          </button>
        </div>
      </form>
      {detAula.aula && (
        <div className='mt-2 w-full' key={detAula.aula.id}>
          <button
            className='block bg-zinc-300 text-black text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer'
            onClick={() => {
              setDetAula((state) => ({ ...state, aula: '' }))
            }}
          >
            {detAula.aula.id}
          </button>
          <div className='grid grid-cols-2 text-center'>
            <p>{detAula.aula.id}</p>
            <p>{detAula.aula.tipo}</p>
          </div>
        </div>
      )}
      <label className='block text-center'>Aulas</label>
      <AulaCard aulas={aulas} />
    </>
  )
}

export default FormBasic

const formatDate = (date) => {
  const newDate = new Date(date)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return newDate.toLocaleDateString('es-CO', options)
}
