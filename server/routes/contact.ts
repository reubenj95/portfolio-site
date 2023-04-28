import { Router } from 'express'
import sgMail from '@sendgrid/mail'

const router = Router()

router.post('/', async (req, res) => {
  const submission = req.body
  try {
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      const msg = {
        to: 'reuben.jensen11@gmail.com', // Change to your recipient
        from: 'reuben.jensen11@gmail.com', // Change to your verified sender
        subject: 'New contact form submission',
        html: `<p><strong>Submission details:</strong></p><ul><li>Name:${submission.name}</li><li>Email:${submission.email}</li><li>Subject:${submission.subject}</li></ul><br/><p>Message:</p><br/><p>${submission.message}</p>`,
      }
      await sgMail.send(msg)
      res.json({ message: 'Message sent' })
    }
  } catch (err) {
    res.status(500)
    res.json('Something went wrong.')
  }
})

export default router
