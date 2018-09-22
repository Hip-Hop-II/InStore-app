import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import {EvilIcons} from '@expo/vector-icons'
import InstoreButton from '../components/buttons/InstoreButton'

export default class AddressScreen extends PureComponent {
  static navigationOptions = {
    title: 'Address'
  }
  renderEmpty = () => {
    return (
      <View style={styles.emptyWrapper}>
        <View style={styles.icons}>
          <EvilIcons name="location" color={colors.green} size={200} />
        </View>
        <View style={styles.emptyBody}>
          <Text style={{fontWeight: '700', fontSize: 18}}>
            Add address
          </Text>
          <Text style={{color: colors.greyLight}}>
            You haven't added an address yet.
          </Text>
        </View>
        <InstoreButton style={{backgroundColor: colors.green, marginTop: 20}}
        onPress={() => this.props.navigation.navigate('AddressForm')}
        >
          <Text style={{color: colors.white, fontSize: 16}} >Add address</Text>
        </InstoreButton>
      </View>
    )
  }
  render() {
    if (true) {
      return this.renderEmpty()
    }
    return (
      <View style={styles.wrapper}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  emptyWrapper: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: colors.white,
   padding: 24
  },
  icons: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyBody: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})