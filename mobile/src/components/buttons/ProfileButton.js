import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import HeaderButton from './HeaderButton'

export default class ProfileButton extends PureComponent {
  render() {
    const {navigation} = this.props
    return (
      <HeaderButton left onPress={() => navigation.navigate('Profile')}>
        <EvilIcons 
        name="user"
        color='white'
        size={35}
        />
      </HeaderButton>
    )
  }
}
