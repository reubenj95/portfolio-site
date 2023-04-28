import { join } from 'node:path'
import express from 'express'
import * as dotenv from 'dotenv'
import entriesRoutes from './routes/entries'
import categoriesRoutes from './routes/categories'
import contactRoutes from './routes/contact'

const server = express()
dotenv.config()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/portfolio-entries', entriesRoutes)
server.use('/api/v1/categories', categoriesRoutes)
server.use('/api/v1/contact', contactRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
