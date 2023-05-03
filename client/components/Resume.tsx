import Nav from './Nav'

export default function Resume() {
  return (
    <>
      <Nav selected="Resume" state="header-top" />
      <section id="resume" className="resume section-show">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <p>
                  I am an innovative problem solver and an excellent
                  communicator. I have taken my corporate business experience
                  and expanded my capabilities to include a strong technical
                  skill set. If you need a functional, effective and
                  customer-focused solution to a problem, I&apos;m your guy.
                </p>
                <a
                  href="/assets/uploads/Reuben_Hawthorne-Jensen_CV_2023_2.pdf"
                  target="_blank"
                >
                  Click here to download a PDF copy of my resume
                </a>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Certificate of Applied Software Development</h4>
                <h5>2023</h5>
                <p>
                  <em>Dev Academy Aotearoa</em>
                </p>
                <p>
                  I completed the Dev Academy Software Development bootcamp in
                  April 2023. It was an intensive 17 week program in which I
                  solidifed my existing coding skills while getting hands on
                  experience work collaboratively with other developers on
                  projects, following industry best practices along the way.
                </p>
              </div>
              <div className="resume-item">
                <h4>Agile Certified Professional</h4>
                <h5>2022</h5>
                <p>
                  <em>IC Agile (facilitated by Boost)</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Commerce (Marketing)</h4>
                <h5>2014 - 2017</h5>
                <p>
                  <em>Victoria University of Wellington</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Arts (Media Studies &amp; Theatre)</h4>
                <h5>2014 - 2017</h5>
                <p>
                  <em>Victoria University of Wellington</em>
                </p>
              </div>
              <h3 className="resume-title">Community Involvement</h3>
              <div className="resume-item">
                <h4>Executive Board Member</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Wellington Thai Boxing</em>
                </p>
                <p>
                  Duties include administration of the club website and social
                  media and collaborating with the ELT on other matters relating
                  to running the club.
                </p>
              </div>
              <div className="resume-item">
                <h4>Muay Thai Trainer</h4>
                <h5>2020 - Present</h5>
                <p>
                  <em>Wellington Thai Boxing</em>
                </p>
                <p>
                  Teaching Muay Thai classes to students with a range of skill
                  levels from beginners to fight training.
                </p>
              </div>
              <div className="resume-item">
                <h4>Community Event Facilitator</h4>
                <h5>2021 - Present</h5>
                <p>
                  Coordinating and running small group exercises, involv- ing
                  clear communication, critical thinking and creative problem
                  solving in a fast-paced, highly collaborative environment.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Web &amp; Social Media Advisor</h4>
                <h5>Nov 2021 - Feb 2023</h5>
                <p>
                  <a
                    href="https://www.nzeiteriuroa.org.nz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>NZEI Te Riu Roa</em>
                  </a>
                </p>

                <ul>
                  <li>
                    Project management of the development of NZEI Te Riu
                    Roa&apos;s new, consolidated website to replace 7+ legacy
                    properties.
                  </li>
                  <li>
                    Collaborative problem solving to support organising and
                    campaign activities with digital tools and solutions.
                  </li>
                  <li>
                    Development of minor front-end features, such as responsive
                    header layouts, template modificatins, and simple
                    calculators (Javascript).
                  </li>
                  <li>
                    Maintaining and updating content across NZEI Te Riu
                    Roa&apos;s existing web properties.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Marketing Executive</h4>
                <h5>June 2020 - October 2021</h5>
                <p>
                  <a
                    href="https://www.storbie.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <em>Storbie</em>
                  </a>
                </p>

                <ul>
                  <li>
                    Maintaining and updating content on the old Storbie website
                    (ASP.NET framemework, CSHTML and SASS)
                  </li>
                  <li>
                    Project management of Storbie&apos;s new website build
                    (Umbraco CMS)
                  </li>
                  <li>
                    Development of front end features for the new site including
                    the pricing page, feature grid and automated pop-up for lead
                    capture.
                  </li>
                  <li>
                    End-to-end management and implementation of Storbie&apos;s
                    marketing strategy.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Website Consulting &amp; Development</h4>
                <h5>Jan 2021 - Present</h5>
                <p>
                  <em>Self-employed</em>
                </p>

                <ul>
                  <li>
                    Design and build websites for clients (Wordpress, Craft CMS)
                  </li>
                  <li>Deploy websites to cloud hosting providers.</li>
                  <li>
                    Manage DNS records, support with domain authentication for
                    email and third party apps.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Marketing Coordinator</h4>
                <h5>May 2019 - June 2020</h5>
                <p>
                  <em>Creative HQ</em>
                </p>

                <ul>
                  <li>
                    Managing websites for Creative HQ&apos;s three main brands
                    (CHQ, Lightning Lab and GovTech).{' '}
                  </li>
                  <li>
                    Planning, implementation and training (internal and
                    external) of digital tools to enable digital workshops
                    during the level 4 lockdown in 2020.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Account Executive</h4>
                <h5>Jan 2018 - May 2019</h5>
                <p>
                  <em>Isentia</em>
                </p>

                <ul>
                  <li>
                    Providing technical support and guidance to maximise the
                    value of Isentia&apos;s products.
                  </li>
                  <li>
                    Working with clients to understand their needs, optimise
                    their service.
                  </li>
                  <li>
                    Strategic relationship managment with a view to grow
                    oppotunities within client accounts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
