import About from './About'
import Nav from './Nav'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import PortfolioDetails from './PortfolioDetails'
import PrivacyPolicy from './PrivacyPolicy'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav selected="Home" state="" />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio/:portfolioId" element={<PortfolioDetails />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default App
