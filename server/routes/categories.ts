import { Router } from 'express'
import db from '../db/categories'

const router = Router()

router.get('/', async (req, res) => {
  const categories = await db.fetchCategories()
  res.json(categories)
})

export default router
