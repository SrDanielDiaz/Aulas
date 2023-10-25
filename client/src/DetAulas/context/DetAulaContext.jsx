import { createContext, useContext, useState } from 'react'
import {
  createDetAulaRequest,
  deleteDetAulaRequest,
  getDetAulaRequest,
  getDetAulasRequest,
  updateDetAulaRequest
} from '../api/detaulas.api'

export const DetAulaContext = createContext()
export const useDetAulas = () => {
  const context = useContext(DetAulaContext)
  if (!context) {
    throw new Error('useDetAulas debe estar dentro de un DetAulaContextProvider')
  }
  return context
}

export const DetAulaContextProvider = ({ children }) => {
  const [detAulas, setDetAulas] = useState([])
  async function loadDetAulas() {
    const res = await getDetAulasRequest()
    setDetAulas(res.data)
  }
  const deleteDetAula = async (id) => {
    try {
      await deleteDetAulaRequest(id)
      setDetAulas(detAulas.filter((aula) => aula.id !== id))
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:29 ~ deleteAula ~ error:', error)
    }
  }
  const createAula = async (aula) => {
    try {
      await createDetAulaRequest(aula)
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:38 ~ createAula ~ error:', error)
    }
  }

  const getAula = async (id) => {
    try {
      const res = await getDetAulaRequest(id)
      return res.data
    } catch (error) {
      console.log(
        '🚀 ~ file: AulaContext.jsx ~ line 67 ~ getAula~ error',
        error
      )
    }
  }
  const updateAula = async (id, aula) => {
    try {
      await updateDetAulaRequest(id, aula)
    } catch (error) {
      console.log(
        '🚀 ~ file: AulaContext.jsx ~ line 67 ~ getAula~ error',
        error.response
      )
    }
  }

  const [detAula, setDetAula] = useState({
    fechainicio: '',
    fechafinal: '',
    aula: '',
    done: false,
    motivo: 'default'
  })
  const [selectedAula, setSelectedAula] = useState()

  const filterDetAulas = async (searchTerm) => {
    const { data } = await getDetAulasRequest()
    const filteredDetaulas = data.filter((detaula) => {
      if (typeof detaula.aula === 'number' && (detaula.aula === +searchTerm ||detaula.id === +searchTerm )) {
        return true;
      } else if (typeof detaula.aula === 'string' && detaula.aula.toLowerCase().includes(searchTerm)) {
        return true;
      }
      return false;
    })
    setDetAulas(filteredDetaulas);
  }
  return (
    <DetAulaContext.Provider
      value={{
        detAulas,
        loadDetAulas,
        deleteDetAula,
        createAula,
        getAula,
        updateAula,
        detAula,
        setDetAula,
        selectedAula,
        setSelectedAula,
        filterDetAulas
      }}
    >
      {children}
    </DetAulaContext.Provider>
  )
}
