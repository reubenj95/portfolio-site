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
                    <h1 className="portfolio-title">{item.entryTitle}</h1>

                    <div className="portfolio-details-image">
                      {item.video_demo ? (
                        <div className="embed-container">
                          <iframe
                            src="https://www.youtube.com/embed/SOkFt_XyzgU?start=2150"
                            allowFullScreen
                            title="demo video"
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          src={`/assets/img/portfolio/${item.image_url}`}
                          alt={item.image_alt_text}
                          className="img-fluid"
                        />
                      )}
                      <div className="portfolio-link-flex">
                        {item.repo_url && (
                          <div className="portfolio-link-box">
                            <a
                              title="View on GitHub"
                              href={item.repo_url}
                              className="github"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="portfolio-link-content">
                                <i className="bi bi-github"></i>{' '}
                                <strong>View on GitHub</strong>
                              </span>
                            </a>
                          </div>
                        )}

                        {item.demo_url && (
                          <div className="portfolio-link-box">
                            <a
                              title="Go to demo site"
                              href={item.demo_url}
                              className="demo"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="portfolio-link-content">
                                <i className="bi bi-link"></i>{' '}
                                <strong> View demo</strong>
                              </span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 portfolio-info">
                    <h2>{item.sub_heading}</h2>
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
                  </div>
                </div>
              )
            })
        )}
      </div>
    </div>
  )
}
