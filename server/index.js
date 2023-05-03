import app from './app.js'
import { BK_PORT } from './config.js'

app.listen(BK_PORT)
console.log('Server on port', BK_PORT)
