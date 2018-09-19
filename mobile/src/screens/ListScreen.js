import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'

class ListScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>ListScreen</Text>
      </View>
    )
  }
}

export default ListScreen
