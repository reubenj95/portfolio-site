import { useEffect, useState } from 'react'
import About from './About'
import Nav from './Nav'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

function App() {
  const [selected, setSelected] = useState('Home')
  const [navState, setNavState] = useState('')

  useEffect(() => {
    if (selected == 'Home') {
      setNavState('')
    } else {
      setNavState('header-top')
    }
  }, [selected])

  console.log(selected, navState)
  switch (selected) {
    case 'Home':
      return <Nav selected={setSelected} state={navState} />

    case 'About':
      return (
        <>
          <Nav selected={setSelected} state={navState} />
          <About />
        </>
      )
    case 'Resume':
      return (
        <>
          <Nav selected={setSelected} state={navState} />
          <Resume />
        </>
      )
    case 'Portfolio':
      return (
        <>
          <Nav selected={setSelected} state={navState} />
          <Portfolio />
        </>
      )
    case 'Contact':
      return (
        <>
          <Nav selected={setSelected} state={navState} />
          <Contact />
        </>
      )
  }
}

export default App
