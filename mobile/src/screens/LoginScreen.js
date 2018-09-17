import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import OnboardingLogo  from '../components/OnboardingLogo'
import LoginButton from '../components/buttons/LoginButton'

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <OnboardingLogo />
        </View>
        <View style={styles.buttonWrapper}>
          <LoginButton type="google">Continue with Google</LoginButton>
          <LoginButton type="facebook">Continue with Facebook</LoginButton>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    marginTop: 120
  },
  buttonWrapper: {
    flex: 1.5
  }
})

export default LoginScreen
