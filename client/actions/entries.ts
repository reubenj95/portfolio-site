export const ENTRIES_PENDING = 'ENTRIES_PENDING'
export const ENTRIES_SUCCESS = 'ENTRIES_SUCCESS'
export const ENTRIES_ERROR = 'ENTRIES_ERROR'

export type EntriesAction =
  | { type: typeof ENTRIES_PENDING; payload: void }
  | { type: typeof ENTRIES_SUCCESS; payload: PortfolioEntry[] }
  | { type: typeof ENTRIES_ERROR; payload: string }

export function entriesPending(): EntriesAction {
  return {
    type: ENTRIES_PENDING,
  } as EntriesAction
}

export function entriesSuccess(allEntries: PortfolioEntries[]): EntriesAction {
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

export function fetchPortfolioEntries(): ThunkAction {}
