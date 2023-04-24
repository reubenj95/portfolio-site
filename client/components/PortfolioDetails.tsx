import { Link, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { fetchPortfolioEntries } from '../actions/entries'
import Loader from './Loader'

export default function PortfolioDetails() {
  const { data, loading, error } = useAppSelector((state) => state.entries)
  const { portfolioId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPortfolioEntries())
  }, [dispatch])
  {
    error && <p>Something went wrong</p>
  }
  return (
    <div id="portfolio-details" className="portfolio-details">
      <div className="container">
        <Link to="/portfolio">
          <div className="back-button">
            <i className="bi bi-arrow-left"></i>
          </div>
        </Link>
        {loading ? (
          <Loader />
        ) : (
          data
            ?.filter((entry) => entry.entryId === Number(portfolioId))
            .map((item) => {
              return (
                <div key={item.entryId} className="row">
                  <div className="col-lg-8">
                    <h2 className="portfolio-title">{item.entryTitle}</h2>

                    <div className="portfolio-details-image">
                      <img
                        src={`/assets/img/portfolio/${item.image_url}`}
                        alt={item.image_alt_text}
                        className="img-fluid"
                      />
                    </div>
                  </div>

                  <div className="col-lg-4 portfolio-info">
                    <h3>{item.sub_heading}</h3>
                    <ul>
                      {item.name && (
                        <li>
                          <strong>Category</strong>: {item.name}
                        </li>
                      )}
                      {item.client && (
                        <li>
                          <strong>Client</strong>:
                          <a href={item.client_url}>{item.client}</a>
                        </li>
                      )}
                      {item.status && (
                        <li>
                          <strong>Project status</strong>: {item.status}
                        </li>
                      )}
                    </ul>

                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></div>
                    <div className="portfolio-links">
                      {item.repo_url && (
                        <a
                          title="View on GitHub"
                          href={item.repo_url}
                          className="github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      )}

                      {item.demo_url && (
                        <a
                          title="Go to demo site"
                          href={item.demo_url}
                          className="demo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-link"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })
        )}
      </div>
    </div>
  )
}
