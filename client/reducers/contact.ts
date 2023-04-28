import {
  ContactAction,
  CONTACT_ERROR,
  CONTACT_PENDING,
  CONTACT_SUCCESS,
} from '../actions/contact'

interface ContactState {
  data: string | undefined
  error: string | undefined
  loading: boolean
}

const initialState: ContactState = {
  data: undefined,
  error: undefined,
  loading: false,
}

const contactReducer = (
  state = initialState,
  action: ContactAction
): ContactState => {
  const { type, payload } = action

  switch (type) {
    case CONTACT_PENDING:
      return {
        data: undefined,
        loading: true,
        error: undefined,
      }
    case CONTACT_SUCCESS:
      return {
        data: payload,
        loading: false,
        error: undefined,
      }
    case CONTACT_ERROR:
      return {
        data: undefined,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default contactReducer
