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
  const deleteAula = async (id) => {
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
      // add new Aulato the list
      // setaulas([...aulas, res.data]);
      // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos aulas en el array
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
  // const searchaulas = async (searchInput) => {
  //   try {
  //     // console.log(
  //     //   "🚀 ~ file: AulaContext.jsx ~ line 106 ~ searchaulas ~ searchInput",
  //     //   searchInput
  //     // );
  //     const res = await searchaulasRequest(searchInput)
  //     setaulas(res.data)
  //   } catch (error) {
  //     console.log(
  //       '🚀 ~ file: AulaContext.jsx ~ line 109 ~ searchaulas ~ error',
  //       error
  //     )
  //   }
  // }
  return (
    <DetAulaContext.Provider
      value={{
        detAulas,
        loadDetAulas,
        deleteAula,
        createAula,
        getAula,
        updateAula
      }}
    >
      {children}
    </DetAulaContext.Provider>
  )
}
