import request from 'superagent'
import { PortfolioEntry } from '../../models/portfolio'

async function fetchPortfolioEntries(): Promise<PortfolioEntry[]> {
  const response = await request.get('/api/v1/portfolio-entries/')
  return response.body
}

export default { fetchPortfolioEntries }
