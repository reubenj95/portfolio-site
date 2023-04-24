import { ThunkAction } from '../store'
import { FullPorfolio } from '../../models/portfolio'
import api from '../api/entries'

export const ENTRIES_PENDING = 'ENTRIES_PENDING'
export const ENTRIES_SUCCESS = 'ENTRIES_SUCCESS'
export const ENTRIES_ERROR = 'ENTRIES_ERROR'

export type EntriesAction =
  | { type: typeof ENTRIES_PENDING; payload: void }
  | { type: typeof ENTRIES_SUCCESS; payload: FullPorfolio[] }
  | { type: typeof ENTRIES_ERROR; payload: string }

export function entriesPending(): EntriesAction {
  return {
    type: ENTRIES_PENDING,
  } as EntriesAction
}

export function entriesSuccess(allEntries: FullPorfolio[]): EntriesAction {
  return {
    type: ENTRIES_SUCCESS,
    payload: allEntries,
  }
}

export function entriesError(errorMessage: string) {
  return {
    type: ENTRIES_ERROR,
    payload: errorMessage,
  }
}

export function fetchPortfolioEntries(): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(entriesPending())
      const entries = await api.fetchPortfolioEntries()
      dispatch(entriesSuccess(entries))
    } catch (err) {
      if (err instanceof Error) {
        dispatch(entriesError(err.message))
      } else {
        dispatch(entriesError('An unknown error has occurred'))
      }
    }
  }
}
