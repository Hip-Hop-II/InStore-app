import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import OnboardingLogo from '../components/OnboardingLogo'

class SplashScreen extends Component {
  state = {}
  
  componentDidMount () {
    this.checkAuth()
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 200)
  }

  render() {
    return (
      <View style={styles.container}>
        <OnboardingLogo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SplashScreen
