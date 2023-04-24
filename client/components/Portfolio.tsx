import Nav from './Nav'
import PorfolioCard from './PortfolioCard'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { fetchPortfolioEntries } from '../actions/entries'
import Loader from './Loader'

export default function Portfolio() {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.entries)

  useEffect(() => {
    dispatch(fetchPortfolioEntries())
  }, [dispatch])
  return (
    <>
      <Nav selected="Portfolio" state="header-top" />
      <section id="portfolio" className="portfolio section-show">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Work</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {loading && <Loader />}
            {error && <p>Something went wrong...</p>}
            {data &&
              data.map((entry) => (
                <PorfolioCard entry={entry} key={entry.entryId} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
