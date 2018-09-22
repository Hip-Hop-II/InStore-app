import React, { PureComponent } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import {EvilIcons, MaterialIcons} from '@expo/vector-icons'
import ListColumn from '../components/ListColumn'
import {colors} from '../utils/colors'

const baseIconStyle = {
  size: 25,
  color: colors.grey,
};

const LINKS = [
  {
    link: 'EditUserInfo',
    title: 'Your name and email',
    icon: <EvilIcons name="user" {...baseIconStyle} />,
  },
  {
    link: 'Addresses',
    title: 'Addresses',
    icon: <EvilIcons name="location" {...baseIconStyle} />,
  },
]

export default class SettingScreen extends PureComponent {
  static navigationOptions = {
    title: 'Settings'
  }
  listOnPress = (link) => {
    this.props.navigation.navigate(link)
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {LINKS.map((item, index) => (
            <ListColumn key={index} link onPress={() => this.listOnPress(item.link)}>
            <ListColumn.Left>
              <View style={styles.leftWrapper}>
                <View style={styles.leftIcon}>
                  {item.icon}
                </View>
                <View style={styles.titleWrapper}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </View>
            </ListColumn.Left>
            <ListColumn.Right>
              <MaterialIcons name="keyboard-arrow-right" {...baseIconStyle}  />
            </ListColumn.Right>
          </ListColumn>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  leftIcon: {
    flex: 0.1
  },
  titleWrapper: {
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  }
})