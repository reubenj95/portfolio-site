import { combineReducers } from 'redux'

import entriesReducer from './entries'

export default combineReducers({
  entries: entriesReducer,
})
