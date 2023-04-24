import { Router } from 'express'
import db from '../db/categories'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const categories = await db.fetchCategories()
    res.json(categories)
  } catch (err) {
    res.status(500)
    res.json('Something went wrong.')
  }
})

export default router
