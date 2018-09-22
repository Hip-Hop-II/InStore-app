import React, { PureComponent } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {colors} from '../../utils/colors'

export default class InstoreButton extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.any,
    disabledStyle: PropTypes.any
  }
  render() {
    const {children, disabled, onPress, style, disabledStyle} = this.props
    return (
      <TouchableOpacity 
      style={[styles.wrapper, disabled ? disabledStyle : style]} 
      onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    height: 40
  }
})