import { ThunkAction } from '../store'
import { Submission } from '../../models/submission'
import api from '../api/contact'

export const CONTACT_PENDING = 'CONTACT_PENDING'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'
export const CONTACT_ERROR = 'CONTACT_ERROR'

export type ContactAction =
  | { type: typeof CONTACT_PENDING; payload: void }
  | { type: typeof CONTACT_SUCCESS; payload: string | undefined }
  | { type: typeof CONTACT_ERROR; payload: string }

export function contactPending(): ContactAction {
  return {
    type: CONTACT_PENDING,
  } as ContactAction
}

export function contactSuccess(
  submissionResponse: string | undefined
): ContactAction {
  return {
    type: CONTACT_SUCCESS,
    payload: submissionResponse,
  }
}

export function contactError(errorMessage: string) {
  return {
    type: CONTACT_ERROR,
    payload: errorMessage,
  }
}

export function submitContactForm(submission: Submission): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(contactPending())
      const submissionResponse = await api.submitContactForm(submission)
      dispatch(contactSuccess(submissionResponse))
    } catch (err) {
      if (err instanceof Error) {
        dispatch(contactError(err.message))
      } else {
        dispatch(contactError('An unknown error has occurred'))
      }
    }
  }
}
