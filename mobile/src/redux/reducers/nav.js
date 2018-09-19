import {combineReducers} from 'redux'
import {NavigationActions} from 'react-navigation'

import {AppNavigator} from '../../screens'

const firstAction = AppNavigator.router.getActionForPathAndParams('Auth')
const tempNavState = AppNavigator.router.getStateForAction(firstAction)
const secondAction = AppNavigator.router.getActionForPathAndParams('Main')
const initNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState)

function nav (state = initNavState, action) {
  let nextState
  switch (action.type) {
    case 'Auth':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
      
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break;
  }

  return nextState || state
}

export {nav}
