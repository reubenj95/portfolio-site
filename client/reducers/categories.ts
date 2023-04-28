import {
  CategoryAction,
  CATEGORIES_ERROR,
  CATEGORIES_PENDING,
  CATEGORIES_SUCCESS,
} from '../actions/categories'
import { Category } from '../../models/categories'
interface CategoriesState {
  data: Category[] | undefined
  error: string | undefined
  loading: boolean
}

const initialState: CategoriesState = {
  data: undefined,
  error: undefined,
  loading: false,
}

const categoryReducer = (
  state = initialState,
  action: CategoryAction
): CategoriesState => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_PENDING:
      return {
        data: undefined,
        loading: true,
        error: undefined,
      }
    case CATEGORIES_SUCCESS:
      return {
        data: payload,
        loading: false,
        error: undefined,
      }
    case CATEGORIES_ERROR:
      return {
        data: undefined,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default categoryReducer
