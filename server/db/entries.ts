import { FullPorfolio } from '../../models/portfolio'
import connection from './connection'

function fetchPortfolioEntries(db = connection): Promise<FullPorfolio[]> {
  return db('portfolio')
    .leftJoin(
      'portfolio_images',
      'portfolio.id',
      '=',
      'portfolio_images.entry_id'
    )
    .leftJoin('categories', 'portfolio.category', '=', 'categories.id')
    .select(
      'portfolio.id as entryId',
      'portfolio.title as entryTitle',
      'portfolio.sub_heading',
      'portfolio.status',
      'portfolio.demo_url',
      'portfolio.repo_url',
      'portfolio.video_demo',
      'portfolio.description',
      'portfolio.date',
      'portfolio.client',
      'portfolio.client_url',
      'portfolio_images.image_url',
      'portfolio_images.image_alt_text',
      'categories.name as category',
      'categories.id as categoryId'
    )
}

export default {
  fetchPortfolioEntries,
}
