import { useEffect, useState } from 'react'
import About from './About'
import Nav from './Nav'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Route, Routes, useParams } from 'react-router-dom'

function App() {
  //const [selected, setSelected] = useState('Home')
  const { selected } = useParams()
  const [navState, setNavState] = useState('')

  useEffect(() => {
    console.log(selected)
    console.log(navState)
    if (!selected) {
      setNavState('')
    } else {
      setNavState('header-top')
    }
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav selected="Home" state="" />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
