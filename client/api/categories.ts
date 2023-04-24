import request from 'superagent'
import { Category } from '../../models/categories'

async function fetchCategories(): Promise<Category[] | undefined> {
  try {
    const response = await request.get('/api/v1/categories/')
    return response.body
  } catch (err) {
    console.log('Something went wrong')
  }
}

export default { fetchCategories }
