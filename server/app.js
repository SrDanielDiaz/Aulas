import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import aulasRoutes from './routes/aulas.routes.js'
import detAulasRoutes from './routes/detaulas.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://192.168.1.100:5173', ' https://5ab5-181-142-192-137.ngrok-free.app'],
    credentials: true
  })
)
app.use(express.json())
app.use('/api', indexRoutes)
app.use('/api', aulasRoutes)
app.use('/api', detAulasRoutes)

export default app
