import {combineReducers} from 'redux'
import {nav} from './nav'
import {productInfo} from './product'

export default combineReducers({
  nav,
  productInfo
})
