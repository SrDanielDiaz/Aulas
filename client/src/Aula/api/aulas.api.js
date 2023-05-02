import axios from '../../libs/axios'

export const getAulasRequest = async () => await axios.get('/aulas')

export const createAulaRequest = async (aula) =>
  await axios.post('/aulas', aula)

export const deleteAulaRequest = async (id) =>
  await axios.delete(`/aulas/${id}`)
// arreglar despues
export const getAulaRequest = async (id) =>
  await axios.get(`/aulas/${id}`)

export const updateAulaRequest = async (id, aula) =>
  await axios.put(`/aulas/${id}`, aula)

// export const toggleTaskDoneRequest = async (codprod, done) =>
//   await axios.put(`/aulas/${codprod}`, {
//     done,
//   });

export const searchaulasRequest = async (listInput) =>
  await axios.post('/aulas/search', listInput)
