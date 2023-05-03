import { Link } from 'react-router-dom'

interface Props {
  selected: string | undefined
  state: string
}

export default function Nav(props: Props) {
  const { selected, state } = props

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
      toggleMobileNav()
    }
  }

  function toggleMobileNav() {
    document.querySelector('nav')?.classList.toggle('navbar-mobile')
  }

  const navItems = ['About', 'Resume', 'Portfolio', 'Contact']
  return (
    <header id="header" className={state}>
      <div className="container">
        <h1>
          <Link to="/">Reuben Hawthorne-Jensen</Link>
        </h1>
        <h2>
          I&apos;m a <span>full stack developer</span> from Wellington, NZ
        </h2>

        <nav id="navbar" className="navbar">
          <i
            className="bi bi-list mobile-nav-toggle"
            role="button"
            onClick={toggleMobileNav}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          ></i>
          <ul>
            {navItems.map((item) => {
              if (item === selected) {
                return (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="nav-link active"
                      tabIndex={0}
                    >
                      {item}
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="nav-link"
                      tabIndex={0}
                    >
                      {item}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>

        <div className="social-links">
          <a
            href="https://github.com/reubenj95"
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:reuben.jensen11@gmail.com" className="email">
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/reubenjensen95/"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="/assets/uploads/Reuben_Hawthorne-Jensen_CV_2023_3.pdf"
            className="donwload-cv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-file-earmark-arrow-down-fill"></i>
          </a>
        </div>
      </div>
    </header>
  )
}
