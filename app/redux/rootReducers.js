import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import nav from './nav'
import highlightsReducer from '../Contacts/reducers';

const rootReducers = combineReducers({
  nav: nav,
  highlightsReducer
})

export default rootReducers