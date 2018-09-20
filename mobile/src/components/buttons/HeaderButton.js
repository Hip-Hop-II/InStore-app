import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const MARGIN_SIZE = 8

export default class HeaderButton extends PureComponent {
  render() {
    const {children, left, right, onPress, style} = this.props

    let _style = {}
    if (left) {
      _style.marginLeft = MARGIN_SIZE
    } else if (right) {
      _style.marginRight = MARGIN_SIZE
    }
    return (
      <TouchableOpacity 
      style={[style, _style]}
      onPress={onPress} >
        {children}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  
})
