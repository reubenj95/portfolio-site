import { Link } from 'react-router-dom'
import { FullPorfolio } from '../../models/portfolio'

interface Props {
  entry: FullPorfolio
}

export default function PorfolioCard(props: Props) {
  const { entry } = props
  return (
    <Link to={entry.entryId.toString()}>
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img
            src={`assets/img/portfolio/${entry.image_url}`}
            className="img-fluid"
            alt=""
          />

          <div className="portfolio-info">
            <h4>{entry.entryTitle}</h4>
            <p>{entry.category}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
