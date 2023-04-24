import { useEffect, useState } from 'react'
import About from './About'
import Nav from './Nav'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Route, Routes, useParams } from 'react-router-dom'
import PortfolioDetails from './PortfolioDetails'

function App() {
  const { selected } = useParams()

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav selected="Home" state="" />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio/:portfolioId" element={<PortfolioDetails />} />
      </Routes>
    </>
  )
}

export default App
