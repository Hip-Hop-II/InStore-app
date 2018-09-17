import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { images } from '../../utils/images'
import { FontAwesome } from '@expo/vector-icons'

class LoginButton extends Component {
  render() {
    const { onPress, children, type } = this.props
    return (
      <TouchableOpacity
        activeOpacity={.8}
        style={[styles.wrapper, {
          backgroundColor: type === 'google' ? '#1976D2' : '#4D6FA9'
        }]}>
        <View style={styles.imageWrapper}>
          {type === 'google' && <Image source={images.googleColorIcon} />}
          {type === 'facebook' && <FontAwesome name="facebook" color="#4D6FA9" size={30} />}
        </View>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    height: 46,
    marginBottom: 15,
    borderRadius: 6,
    padding: 6,
    shadowColor: '#212121',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5

  },
  imageWrapper: {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  buttonText: {
    marginLeft: 15,
    color: '#fff',
    fontSize: 18,
    fontWeight: '400'
  }
})

LoginButton.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.string
}

export default LoginButton
