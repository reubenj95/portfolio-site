import { Router } from 'express'
import db from '../db/entries'

const router = Router()

router.get('/', async (req, res) => {
  const entries = await db.fetchPortfolioEntries()
  res.json(entries)
})
