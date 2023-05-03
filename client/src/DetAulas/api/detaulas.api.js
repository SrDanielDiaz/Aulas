import axios from '../../libs/axios'

export const getDetAulasRequest = async () => await axios.get('/detaulas')

export const createDetAulaRequest = async (detaula) =>
  await axios.post('/detaulas', detaula)

export const deleteDetAulaRequest = async (id) =>
  await axios.delete(`/detaulas/${id}`)

export const getDetAulaRequest = async (id) =>
  await axios.get(`/detaulas/${id}`)

export const updateDetAulaRequest = async (id, detaula) =>
  await axios.put(`/detaulas/${id}`, detaula)

// export const toggleTaskDoneRequest = async (codprod, done) =>
//   await axios.put(`/detaulas/${codprod}`, {
//     done,
//   });

// export const searchdetAulasRequest = async (listInput) =>
//   await axios.post('/detaulas/search', listInput)
