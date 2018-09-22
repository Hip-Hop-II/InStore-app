import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import CloseButton from "../components/buttons/CloseButton"
import ListColumn  from '../components/ListColumn'
import {MaterialIcons, EvilIcons, Feather, Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/colors'

const baseIconStyle = {
  size: 25,
  color: colors.grey
}

const LINKS = [
  {
    link: "Share",
    title: "Invite friends",
    icon: <Ionicons name="ios-share" {...baseIconStyle} />
  },
  {
    link: "Help",
    title: "Help",
    icon: <Ionicons name="ios-help-circle" {...baseIconStyle} />
  },
  {
    link: "About",
    title: "About this app",
    icon: <Ionicons name="ios-information-circle" {...baseIconStyle} />
  },
  {
    link: "Settings",
    title: "Your accounts settings",
    icon: <Ionicons name="ios-settings" {...baseIconStyle} />
  }
];


export default class ProfileScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: 'Profile',
    headerLeft: <CloseButton
    style={{marginLeft: 10}} size={26}
    onPress={() => navigation.goBack(null)} />
  })
  ListonPress = (link) => {
    this.props.navigation.navigate(link)
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <ListColumn style={{marginTop: 10}}> 
            <ListColumn.Left>
              <Text style={styles.username}>
                Hi,Antony
              </Text>
            </ListColumn.Left>
            <ListColumn.Right>
              <View style={styles.avotar}>
                
              </View>
            </ListColumn.Right>
          </ListColumn>
          {LINKS.map((item, index) => (
            <ListColumn key={index} link onPress={() => this.ListonPress(item.link)}>
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

          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
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
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    marginTop: 20
  },
  logoutText: {
    color: colors.green,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  avotar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.green
  }
});