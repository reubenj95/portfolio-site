import { combineReducers } from 'redux'

import entriesReducer from './entries'
import categoryReducer from './categories'

export default combineReducers({
  entries: entriesReducer,
  categories: categoryReducer,
})
