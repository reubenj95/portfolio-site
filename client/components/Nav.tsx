interface Props {
  selected: React.Dispatch<React.SetStateAction<string>>
  state: string
}

export default function Nav(props: Props) {
  const { selected, state } = props

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    console.log('This ran')
    selected(e.currentTarget.innerText)
  }
  return (
    <header id="header" className={state}>
      <div className="container">
        <h1>
          <a href="index.html">Reuben Hawthorne-Jensen</a>
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
            <li>
              <a className="nav-link active" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={handleNavClick}>
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={handleNavClick}>
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  )
}
