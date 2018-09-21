import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'

const Left = ({children}) => (
  <View style={styles.leftWrapper}>
    {children}
  </View>
)

const Right = ({children}) => (
  <View style={styles.rightWrapper}>
    {children}
  </View>
)

export default class ListColumn extends PureComponent {
  static Left = Left
  static Right = Right

  renderContent = () => (
    <View style={styles.content}>
      {this.props.children}
    </View>
  )
  render() {
    if (this.props.link) {
      return (
        <TouchableOpacity activeOpacity={.7}>
          {this.renderContent()}
        </TouchableOpacity>
      )
    }
    return this.renderContent()
  }
}

const styles = StyleSheet.create({
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start"
  },
  rightWrapper: {
    alignItems: "flex-end"
  },
  content: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.greyLight,
    backgroundColor: colors.white
  }
});