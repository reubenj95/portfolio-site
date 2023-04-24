import { join } from 'node:path'
import express from 'express'
import * as dotenv from 'dotenv'
import entriesRoutes from './routes/entries'

const server = express()
dotenv.config()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/portfolio-entries', entriesRoutes)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
