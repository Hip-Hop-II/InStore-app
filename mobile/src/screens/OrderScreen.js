import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'

class OrderScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>OrderScreen</Text>
      </View>
    )
  }
}

export default OrderScreen
