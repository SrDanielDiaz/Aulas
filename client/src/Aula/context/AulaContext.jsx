import { createContext, useContext, useState } from 'react'
import {
  createAulaRequest,
  deleteAulaRequest,
  getAulaRequest,
  getAulasRequest,
  updateAulaRequest
} from '../api/aulas.api'
export const AulaContext = createContext()
export const useAulas = () => {
  const context = useContext(AulaContext)
  if (!context) {
    throw new Error('useAulas debe estar dentro de un AulaContextProvider')
  }
  return context
}
export const AulaContextProvider = ({ children }) => {
  const [aulas, setAulas] = useState([])
  async function loadAulas() {
    const res = await getAulasRequest()
    setAulas(res.data)
  }
  const deleteAula = async (id) => {
    try {
      await deleteAulaRequest(id)
      setAulas(aulas.filter((aula) => aula.id !== id))
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:29 ~ deleteAula ~ error:', error)
    }
  }
  const createAula = async (aula) => {
    try {
      await createAulaRequest(aula)
      // add new Aulato the list
      // setaulas([...aulas, res.data]);
      // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos aulas en el array
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:38 ~ createAula ~ error:', error)
    }
  }

  const getAula = async (id) => {
    try {
      const res = await getAulaRequest(id)
      return res.data
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:47 ~ getAula ~ error:', error)
    }
  }
  const updateAula = async (id, aula) => {
    try {
      await updateAulaRequest(id, aula)
    } catch (error) {
      console.log('🚀 ~ file: AulaContext.jsx:54 ~ updateAula ~ error:', error)
    }
  }

  return (
    <AulaContext.Provider
      value={{
        aulas,
        loadAulas,
        deleteAula,
        createAula,
        getAula,
        updateAula
      }}
    >
      {children}
    </AulaContext.Provider>
  )
}
