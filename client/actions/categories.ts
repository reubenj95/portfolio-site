import { ThunkAction } from '../store'
import { Category } from '../../models/categories'
import api from '../api/categories'

export const CATEGORIES_PENDING = 'CATEGORIES_PENDING'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR'

export type CategoryAction =
  | { type: typeof CATEGORIES_PENDING; payload: void }
  | { type: typeof CATEGORIES_SUCCESS; payload: Category[] }
  | { type: typeof CATEGORIES_ERROR; payload: string }

export function categoriesPending(): CategoryAction {
  return {
    type: CATEGORIES_PENDING,
  } as CategoryAction
}

export function categoriesSuccess(categories: Category[]): CategoryAction {
  return {
    type: CATEGORIES_SUCCESS,
    payload: categories,
  }
}

export function categoriesError(errorMessage: string) {
  return {
    type: CATEGORIES_ERROR,
    payload: errorMessage,
  }
}

export function fetchCategories(): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(categoriesPending())
      const entries = await api.fetchCategories()
      dispatch(categoriesSuccess(entries))
    } catch (err) {
      if (err instanceof Error) {
        dispatch(categoriesError(err.message))
      } else {
        dispatch(categoriesError('An unknown error has occurred'))
      }
    }
  }
}
