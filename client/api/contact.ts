import request from 'superagent'
import { Submission } from '../../models/submission'

async function submitContactForm(submission: Submission): Promise<string> {
  const response = await request.post('/api/v1/contact').send(submission)
  return response.body.message
}

export default { submitContactForm }
