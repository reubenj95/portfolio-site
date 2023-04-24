import { FullPorfolio } from '../../models/portfolio'
import connection from './connection'

function fetchCategories(db = connection): Promise<FullPorfolio[]> {
  return db('categories').select()
}

export default {
  fetchCategories,
}
