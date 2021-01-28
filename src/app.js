import express from 'express'
import morgan from 'morgan'

import pkg from '../package.json'
import productRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

const app = express()

//settings
app.set('port', 4444)
app.set('pkg', pkg)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

export default app
