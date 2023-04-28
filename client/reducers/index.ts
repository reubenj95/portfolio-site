import { combineReducers } from 'redux'

import entriesReducer from './entries'
import categoryReducer from './categories'
import contactReducer from './contact'

export default combineReducers({
  entries: entriesReducer,
  categories: categoryReducer,
  contact: contactReducer,
})
