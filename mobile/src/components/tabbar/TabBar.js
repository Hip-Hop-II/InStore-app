import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'
import TabBarItem from './TabBarItem'
import {colors} from '../../utils/colors'

export default class TabBar extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any
  }

  render() {
    const { navigation } = this.props
    const { routes, index } = navigation.state
      return(
        <View style={styles.wrapper}>
          {routes.map((route, i) => (
            <TabBarItem 
            navigation={navigation}
            key={i}
            {...route}
            isActive={index === i}
            />
          ))}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    flexDirection: "row",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.16,
    shadowRadius: 4
  }
})
