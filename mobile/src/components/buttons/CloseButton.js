import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import HeaderButton from './HeaderButton'
import {EvilIcons} from '@expo/vector-icons'
import {colors} from '../../utils/colors'
import PropTypes from 'prop-types'

export default class CloseButton extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
  }
  render() {
    const {color, size, ...rest} = this.props
    return (
      <HeaderButton {...rest} >
        <EvilIcons name="close" size={size} color={color}  />
      </HeaderButton>
    )
  }
}

CloseButton.defaultProps = {
  color: colors.green,
  size: 18
}

const styles = StyleSheet.create({
  
})