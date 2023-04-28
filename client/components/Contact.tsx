import { useState } from 'react'
import Nav from './Nav'
import ContactForm from './ContactForm'

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  console.log(messageSent)
  return (
    <>
      <Nav selected="Contact" state="header-top" />
      <section id="contact" className="contact section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="contact-box">
                <h3>Get in touch</h3>
                <p>
                  You can connect with me direct, hit me up on social media or
                  drop me a line using the form below. I&apos;ll do my best to
                  get back to you ASAP.
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex flex-column align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://github.com/reubenj95"
                    className="github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i>
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
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <a href="mailto:reuben.jensen11@gmail.com">
                  <p>reuben.jensen11@gmail.com</p>
                </a>
              </div>
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>+64 27 936 4948</p>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch"></div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch"></div>
          </div>
          {messageSent && messageSent ? (
            <div>
              <p>Thanks for reaching out! I&apos;ll be in touch soon.</p>
              <button
                onClick={() => {
                  setMessageSent(false)
                }}
              >
                Reset form
              </button>
            </div>
          ) : (
            <ContactForm />
          )}
        </div>
      </section>
    </>
  )
}
