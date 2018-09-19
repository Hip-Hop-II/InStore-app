import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware  from 'redux-thunk'
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import {NavigationMiddleware} from '../screens'
import reducer from './reducers'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
})



export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware, NavigationMiddleware))
