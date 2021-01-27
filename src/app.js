import express from 'express'
import morgan from 'morgan'

import pkg from '../package.json'
import productRoutes from './routes/products.routes'

const app = express()

//settings
app.set('port', 4444)
app.set('pkg', pkg)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/products', productRoutes)

export default app
