import React, { PureComponent } from "react"
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {tabBarIcons} from '../../utils/images'
import { colors } from '../../utils/colors'

export default class TabBarItem extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    isActive: PropTypes.bool,
    routeName: PropTypes.string
  }

  render() {
    const { navigation, isActive, routeName} = this.props
    const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName]
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate(routeName)} style={styles.activeOpacity}>
          <View style={{marginBottom: 3}}>
            <Image source={icon} />
          </View>
          <View>
            <Text style={[styles.routeName, { color: isActive ? colors.green : colors.greyDark }]}>
              {routeName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  activeOpacity: {
    alignItems: "center"
  },
  routeName: {
    fontSize: 12,
    fontWeight: "400"
  }
});
