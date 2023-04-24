import Nav from './Nav'
import PorfolioCard from './PortfolioCard'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect, useState } from 'react'
import { fetchPortfolioEntries } from '../actions/entries'
import Loader from './Loader'
import { fetchCategories } from '../actions/categories'

export default function Portfolio() {
  const dispatch = useAppDispatch()
  const entries = useAppSelector((state) => state.entries)
  const categories = useAppSelector((state) => state.categories)
  const [selected, setSelected] = useState('All')
  const [filteredEntries, setFilteredEntries] = useState(entries.data)

  useEffect(() => {
    dispatch(fetchPortfolioEntries())
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    if (entries.data && selected.toLowerCase() === 'all') {
      setFilteredEntries(entries.data)
    } else if (entries.data) {
      const filteredArray = entries.data.filter(
        (entry) => entry.category.toLowerCase() === selected.toLowerCase()
      )
      setFilteredEntries(filteredArray)
    }
  }, [selected, entries.data])

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const name = e.currentTarget.innerText
    setSelected(name)
    const buttons = document.querySelectorAll('#portfolio-flters button')
    buttons.forEach((button) => {
      button.classList.remove('filter-active')
      if (button.textContent?.toLowerCase() === name.toLowerCase()) {
        button.classList.add('filter-active')
      }
    })
  }
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
              {categories.loading ? (
                <Loader />
              ) : (
                <ul id="portfolio-flters">
                  <button className="filter-active" onClick={handleClick}>
                    All
                  </button>
                  {categories.data?.map((item) => {
                    return (
                      <button key={item.id} onClick={handleClick}>
                        {item.name}
                      </button>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>

          <div className="row portfolio-container">
            {entries.loading && <Loader />}
            {entries.error && <p>Something went wrong...</p>}
            {filteredEntries && filteredEntries.length > 0 ? (
              filteredEntries.map((entry) => (
                <PorfolioCard entry={entry} key={entry.entryId} />
              ))
            ) : (
              <p>Nothing to display in this category right now. </p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
