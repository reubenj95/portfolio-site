import Nav from './Nav'

export default function About() {
  return (
    <>
      <Nav selected="About" state="header-top" />
      <section id="about" className="about section-show">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Hi, I&apos;m Reuben</h3>
              <p className="fst-italic">
                I&apos;m a fullstack developer based in Wellington. I&apos;ve
                been tinkering with coding for a few years now and decided that
                2023 was the year to make it my main focus.
              </p>
              <div className="row">
                <h4>The basics</h4>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>Phone:</strong> <span>+64 27 936 4948</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>City:</strong>{' '}
                      <span>Lower Hutt, New Zealand</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>Qualifications:</strong>{' '}
                      <span>BA, BCom, PgCert</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{' '}
                      <strong>Email:</strong>{' '}
                      <span>reuben.jensen11@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Welcome to my portfolio site. Whether you&apos;re a potential
                employer or you&apos;re just having a peruse, I&apos;m glad you
                found me! This is just a simple space to share what I&apos;m
                working on.{' '}
              </p>
              <p>
                My professional past-life was in the marketing and
                communications space, so I&apos;m pretty big on story telling.
                There&apos;s a story in pretty much everything, including code
                and technology. I&apos;m exicted to be writing my own story in
                that space and this is just a little snippet for you to enjoy.{' '}
              </p>
              <p>
                I&apos;m a lover of problem solving, so you&apos;ll find a lot
                of the things I build are solving problems I wish I didn&apos;t
                have to experience. Have a browse and reach out if you want to
                chat more over a coffee (virtual or in-person.)
              </p>
            </div>
          </div>
        </div>

        {/* <!-- ======= Interests ======= --> */}
        <div className="interests container">
          <div className="section-title">
            <h2>Tech stack</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="fa-brands fa-square-js"></i> <h3>JavaScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <img
                  src="/assets/img/Typescript_logo_2020.svg.png"
                  alt="typescript"
                  style={{ width: '28px', marginRight: '10px' }}
                />
                <h3>TypeScript</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="fa-brands fa-node-js"
                  style={{ color: '#e80368' }}
                ></i>
                <h3>Node.js</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="fa-brands fa-react"
                  style={{ color: '#e361ff' }}
                ></i>
                <h3>React</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img
                  src="/assets/img/redux-logo.png"
                  alt="redux"
                  style={{ width: '28px', marginRight: '10px' }}
                />
                <h3>Redux</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-solid fa-database"
                  style={{ color: '#b20969' }}
                ></i>
                <h3>Databases (SQL & noSQL)</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-sass"
                  style={{ color: '#ffa76e' }}
                ></i>
                <h3>SCSS/SASS</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-html5"
                  style={{ color: '#11dbcf' }}
                ></i>
                <h3>HTML</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-bootstrap"
                  style={{ color: '#4233ff' }}
                ></i>
                <h3>Bootstrap</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <img
                  src="/assets/img/pngwing.com.png"
                  alt="ASP.NET MVC"
                  width="55"
                />
                <h3>ASP.Net MVC</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-docker"
                  style={{ color: '#ff5828' }}
                ></i>
                <h3>Dokku/Docker</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-php"
                  style={{ color: '#29cc61' }}
                ></i>
                <h3>PHP</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="interests container">
          <div className="section-title">
            <h2>Other interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <img
                  src="/assets/img/Kickboxer_silhouette.svg"
                  alt="kickboxer"
                  style={{ width: '28px', marginRight: '10px' }}
                />
                <h3>Muay thai/Kickboxing</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="fa-solid fa-mug-hot"
                  style={{ color: '#5578ff' }}
                ></i>
                <h3>Coffee</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="fa-solid fa-motorcycle"
                  style={{ color: '#e80368' }}
                ></i>
                <h3>Cars/Motorbikes</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i className="fa-solid fa-dog" style={{ color: '#e361ff' }}></i>
                <h3>Dogs/Dog Training</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-brands fa-d-and-d"
                  style={{ color: '#47aeff' }}
                ></i>
                <h3>D&D</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-solid fa-shield-halved"
                  style={{ color: '#ffa76e' }}
                ></i>
                <h3>Cyber Secuity/ Pen Testing</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-solid fa-pen-nib"
                  style={{ color: '#11dbcf' }}
                ></i>
                <h3>Writing</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="fa-solid fa-cubes"
                  style={{ color: '#4233ff' }}
                ></i>
                <h3>3D Printing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
