import { PortfolioEntry } from '../../models/portfolio'
import connection from './connection'

function fetchPortfolioEntries(db = connection): Promise<PortfolioEntry[]> {
  return db('portfolio').select()
}

export default {
  fetchPortfolioEntries,
}
