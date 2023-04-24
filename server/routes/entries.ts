import { Router } from 'express'
import db from '../db/entries'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const entries = await db.fetchPortfolioEntries()
    res.json(entries)
  } catch (err) {
    res.status(500)
    res.json('Something went wrong.')
  }
})

export default router
