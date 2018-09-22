import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {colors} from '../utils/colors'
import PropTypes from 'prop-types'

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
  static propTypes = {
    link: PropTypes.bool,
    onPress: PropTypes.func
  }
  static Left = Left
  static Right = Right

  renderContent = () => (
    <View style={styles.content}>
      {this.props.children}
    </View>
  )
  render() {
    const {onPress} = this.props
    if (this.props.link) {
      return (
        <TouchableOpacity activeOpacity={.7} onPress={onPress}>
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