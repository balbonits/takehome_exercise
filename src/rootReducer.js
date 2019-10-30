import { combineReducers } from 'redux'
import appReducers from './reducers/index'

export default combineReducers({
  app: appReducers
})
