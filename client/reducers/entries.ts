import {
  EntriesAction,
  ENTRIES_ERROR,
  ENTRIES_PENDING,
  ENTRIES_SUCCESS,
} from '../actions/entries'
import { FullPorfolio } from '../../models/portfolio'
interface EntriesState {
  data: FullPorfolio[] | undefined
  error: string | undefined
  loading: boolean
}

const initialState: EntriesState = {
  data: undefined,
  error: undefined,
  loading: false,
}

const entriesReducer = (
  state = initialState,
  action: EntriesAction
): EntriesState => {
  const { type, payload } = action

  switch (type) {
    case ENTRIES_PENDING:
      return {
        data: undefined,
        loading: true,
        error: undefined,
      }
    case ENTRIES_SUCCESS:
      return {
        data: payload,
        loading: false,
        error: undefined,
      }
    case ENTRIES_ERROR:
      return {
        data: undefined,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default entriesReducer
