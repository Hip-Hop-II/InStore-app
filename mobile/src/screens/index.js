import {createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import React from 'react'
import TabBar from '../components/tabbar/TabBar'
import { colors } from '../utils/colors'
import {connect} from 'react-redux'
import ShoppingCardIcon from '../components/ShoppingCardIcon'
import ProfileButton from '../components/buttons/ProfileButton'

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

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

const ShoppingCardNavigator = createStackNavigator({
  ShoppingCard: {
    getScreen: () => require("./ShoppingCardScreen").default,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.white
      }
    }
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    getScreen: () => require('./ProfileScreen').default
  }
})

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require("./HomeScreen").default
    },
    Category: {
      getScreen: () => require("./CategoryScreen").default
    },
    Shopping: {
      screen: ShoppingCardNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerLeft: <ProfileButton navigation={navigation} />,
      headerRight: <ShoppingCardIcon navigation={navigation} />
    })
  }
);

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
  Tab: TabNavigator,
  Profile: ProfileStack
}, {
  navigationOptions: {
    header: null
  }
})
export const NavigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)

export const AppNavigator = createSwitchNavigator({
  Splash: {
    getScreen: () => require('./SplashScreen').default
  },
  Auth: AuthNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'Main'
})

const Navigation = reduxifyNavigator(AppNavigator, 'root')

const mapStateToProps = (state) => ({
  state: state.nav
})

export default connect(mapStateToProps)(Navigation)
