import cors from 'cors'
import express from 'express'
// import { dirname, join } from 'path'
// import { fileURLToPath } from 'url'
// import { BK_PORT } from './config.js'
import morgan from 'morgan'
import aulasRoutes from './routes/aulas.routes.js'
import detAulasRoutes from './routes/detaulas.routes.js'
import indexRoutes from './routes/index.routes.js'
// import { requiereAuth } from './middlewares/requireAuth.js'
// import { JWT_SECRET } from './config.js'

const app = express()
// app.use(cookieParser())
// app.use(cookieParser(JWT_SECRET))
// const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log(__dirname)
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
// http://localhost:5173 // front to back
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://192.168.3.100:5173'],
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': '*',
    //   'Access-Control-Allow-Credentials': 'true'
    // },
    credentials: true
  })
)
// 'http://localhost:5173',
// 'http://192.168.1.101:5173'
// 'http://localhost:3000',
// 'http://192.168.1.101:3000',
// 'http://localhost',
// 'http://192.168.1.101'
// 'https://dev-ronaaldll.online',
// 'https://192.168.1.101:3000',
// 'http://localhost:5173'
app.use(express.json())
app.use('/api', indexRoutes)
// app.use('/api', cookiesRoutes)
// app.use('/api', requiereAuth, aulasRoutes)
app.use('/api', aulasRoutes)
app.use('/api', detAulasRoutes)

// app.use(express.static(join(__dirname, '../client/dist')))
// app.listen(BK_PORT)
// console.log(`Server is listening on port ${BK_PORT}`)

export default app
