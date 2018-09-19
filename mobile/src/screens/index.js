import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import React from 'react'
import TabBar from '../components/tabbar/TabBar'
import { colors } from '../utils/colors'

const primaryHeader = {
  headerStyle: {
    backgroundColor: colors.green
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: '400'
  }
}

const AuthNavigator = createStackNavigator({
  Login: {
    getScreen: () => require('./LoginScreen').default
  }
}, {
  navigationOptions: {
    header: null
  }
})

const HomeStack = createStackNavigator({
  Home: {
    getScreen: () => require("./HomeScreen").default
  },
  Category: {
    getScreen: () => require('./CategoryScreen').default
  }
}, {
  navigationOptions: {...primaryHeader}
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  List: {
    getScreen: () => require('./ListScreen').default
  },
  Stores: {
    getScreen: () => require('./StoresScreen').default
  },
  Order: {
    getScreen: () => require('./OrderScreen').default
  }
}, {
  tabBarComponent: props => <TabBar {...props} />
})

const MainNavigator = createStackNavigator({
  Tab: TabNavigator
}, {
  navigationOptions: {
    header: null
  }
})

const AppNavigator = createSwitchNavigator({
  Splash: {
    getScreen: () => require('./SplashScreen').default
  },
  Auth: AuthNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'Main'
})

class Navigation extends React.Component {
  render () {
    return (
      <AppNavigator />
    )
  }
}

export default Navigation
