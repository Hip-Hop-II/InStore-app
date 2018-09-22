import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../utils/colors'
import InstoreButton from '../components/buttons/InstoreButton'

const defaultInputStyle = {
  width: '90%',
  height: 40,
  borderRadius: 6,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: colors.black,
  alignSelf: 'center',
  backgroundColor: colors.white,
  paddingHorizontal: 15,
  marginBottom: 10
}

export default class AddressFormScreen extends PureComponent {
  static navigationOptions = {
    title: 'Address Form'
  }
  handleAddressFocus = () => {
    this.props.navigation.navigate('Autocomplete')
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <TextInput style={defaultInputStyle}
            placeholder="Address..."
            onFocus={this.handleAddressFocus}
            returnKeyType="done"
          />
          <TextInput
            style={defaultInputStyle}
            returnKeyType="done"
            placeholder="Spt # (options)" />
          <View style={styles.cityWrapper}>
            <TextInput
              style={[defaultInputStyle, { width: '44%' }]}
              returnKeyType="done"
              placeholder="number..." />
            <TextInput
              style={[defaultInputStyle, { width: '44%' }]}
              returnKeyType="done"
              placeholder="city..." />
          </View>
          <TextInput
            style={[defaultInputStyle, { height: 160 }]}
            returnKeyType="done"
            multiline
            maxLength={140}
            enablesReturnKeyAutomatically
            placeholder="Instructions for delivery..."
          />
          <InstoreButton style={styles.saveButton} >
            <Text style={styles.saveText} >Save</Text>
          </InstoreButton>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white
  },
  cityWrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saveButton: {
    marginTop: 40,
    backgroundColor: colors.green,
    alignSelf: "center",
    width: '90%'
  },
  saveText: {
    fontSize: 16,
    color: colors.white
  }
})
