import { Link } from 'react-router-dom'

interface Props {
  //funcSelected: React.Dispatch<React.SetStateAction<string>>
  selected: string | undefined
  state: string
}

export default function Nav(props: Props) {
  const { selected, state } = props

  const navItems = ['About', 'Resume', 'Portfolio', 'Contact']
  return (
    <header id="header" className={state}>
      <div className="container">
        <h1>
          <Link to="/">Reuben Hawthorne-Jensen</Link>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html" className="mr-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>
        <h2>
          I&apos;m a <span>full stack developer</span> from Wellington, NZ
        </h2>

        <nav id="navbar" className="navbar">
          <ul>
            {navItems.map((item) => {
              if (item === selected) {
                return (
                  <li key={item}>
                    <Link to={`/${item}`} className="nav-link active">
                      {item}
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
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
        </div>
      </div>
    </header>
  )
}
