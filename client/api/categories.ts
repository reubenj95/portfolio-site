import request from 'superagent'
import { Category } from '../../models/categories'

async function fetchCategories(): Promise<Category[]> {
  const response = await request.get('/api/v1/categories/')
  return response.body
}

export default { fetchCategories }
