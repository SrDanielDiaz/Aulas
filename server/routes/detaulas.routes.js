import { Router } from 'express'
import {
  createDetAula,
  deleteDetAula,
  getDetAula,
  getDetAulas,
  updateDetAula
} from '../controllers/detaulas.controllers.js'
const router = Router()
// router.post('/aulas/search', searchaulas)
// router.get('/aulas/last', getLastProducto)
router.get('/detaulas', getDetAulas)
router.get('/detaulas/:id', getDetAula)
router.post('/detaulas', createDetAula)
router.put('/detaulas/:id', updateDetAula)
router.delete('/detaulas/:id', deleteDetAula)
export default router
