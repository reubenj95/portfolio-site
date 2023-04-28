import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { submitContactForm } from '../actions/contact'
import Loader from './Loader'

export default function ContactForm() {
  const dispatch = useAppDispatch()
  const { data, loading, error } = useAppSelector((state) => state.contact)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const submission = {
      name,
      email,
      subject,
      message,
    }
    dispatch(submitContactForm(submission))
  }
  if (loading) {
    return <Loader />
  } else if (data) {
    return (
      <div className="contact-success">
        <h3>{data}</h3>
        <p>
          Thanks for reaching out. I will get back to you as soon as possible.
        </p>
      </div>
    )
  } else if (error) {
    return (
      <div className="contact-success">
        <h3>{error}</h3>
      </div>
    )
  } else {
    return (
      <form
        onSubmit={handleSubmit}
        method="post"
        className="php-email-form mt-4"
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">Send Message</button>
        </div>
      </form>
    )
  }
}
