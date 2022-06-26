import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


//impor ruotes
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/product.routes.js'

const app=express()

//cors
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())

app.use(indexRoutes)
app.use(productsRoutes)


export default app