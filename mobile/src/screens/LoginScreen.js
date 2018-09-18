import React, { Component } from 'react'
import {
  Alert,
  Animated,
  StyleSheet
} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import OnboardingLogo  from '../components/OnboardingLogo'
import LoginButton from '../components/buttons/LoginButton'
import {FacebookApi} from '../api/Fackbook'
import {GoogleApi} from '../api/Google'

class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100
    }).start()
  }

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  componentDidMount () {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start()
  }

  onGooglePress = async () => {
    try {
      const token = await GoogleApi.loginAsync()
      console.log('token======', token)
    } catch (error) {
      console.log('error', error)
    }
  }
  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync()
      console.log('token=======', token)
    } catch (error) {
      console.log('error', error)
    }
  }
  render() {
    const {opacity, position} = this.state

    const logoTranslate = position.interpolate({
      inputRange: [0, 1],
      outputRange: [250, 150]
    })
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.logo, {
          transform: [
            {translateY: logoTranslate}
          ]
        }]}>
          <OnboardingLogo />
        </Animated.View>
        <Animated.View style={[styles.buttonWrapper, {opacity}]}>
          <LoginButton type="google"
          onPress={this.onGooglePress}
          >Continue with Google</LoginButton>
          <LoginButton type="facebook"
          onPress={this.onFacebookPress}
          >Continue with Facebook</LoginButton>
        </Animated.View>
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
  },
  buttonWrapper: {
    flex: .9
  }
})

export default LoginScreen
