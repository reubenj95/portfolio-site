import { FullPorfolio } from '../../models/portfolio'
import connection from './connection'

function fetchPortfolioEntries(db = connection): Promise<FullPorfolio[]> {
  return db('portfolio')
    .join('portfolio_images', 'portfolio.id', '=', 'portfolio_images.entry_id')
    .join('categories', 'portfolio.category', '=', 'categories.id')
    .join(
      'portfolio_collaborators',
      'portfolio.id',
      '=',
      'portfolio_collaborators.entry_id'
    )
    .join(
      'collaborators',
      'portfolio_collaborators.collaborator_id',
      '=',
      'collaborators.id'
    )
    .select(
      'portfolio.id as entryId',
      'portfolio.title as entryTitle',
      'portfolio.sub_heading',
      'portfolio.status',
      'portfolio.demo_url',
      'portfolio.repo_url',
      'portfolio.description',
      'portfolio.date',
      'portfolio.client',
      'portfolio.client_url',
      'collaborators.name as collaboratorName',
      'portfolio_images.image_url',
      'portfolio_images.image_alt_text'
    )
}

export default {
  fetchPortfolioEntries,
}
