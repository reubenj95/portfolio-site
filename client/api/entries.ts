import request from 'superagent'
import { FullPorfolio } from '../../models/portfolio'

async function fetchPortfolioEntries(): Promise<FullPorfolio[]> {
  const response = await request.get('/api/v1/portfolio-entries/')
  return response.body
}

export default { fetchPortfolioEntries }
