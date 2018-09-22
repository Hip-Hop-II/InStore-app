import React, { PureComponent, Fragment } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import {colors} from '../utils/colors'
import {GoogleAutoComplete} from 'react-native-google-autocomplete'

export default class AutocompleteAddressScreen extends PureComponent {
  renderResult = (a, b) => {
    debugger
  }
  render() {
    return (
      <View>
        <GoogleAutoComplete
        apiKey="AIzaSyBQPWlMgHz1Pgp_aWFf73ij4vvsLrTdpvs"
        >
          {({handleTextChange, inputValue, locationResults, isSearching, fetchDetails, ...args}) => (
            <Fragment>
              <View style={styles.searchWrapper}>
                <View style={styles.searchContent}>
                  <TextInput 
                    placeholder="Search address"
                    selectionColor={colors.green}
                    autoFocus
                    returnKeyType="done"
                    onChangeText={handleTextChange}
                    value={inputValue}
                    placeholderTextColor={colors.white}
                    style={{fontSize: 16, color: colors.white}}
                  />
                </View>
              </View>
              <ScrollView>
                {this.renderResult(locationResults, args)}
              </ScrollView>
            </Fragment>
          )}
        </GoogleAutoComplete>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchWrapper: {
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContent: {
    width: '90%',
    height: '90%',
    borderRadius: 6,
    padding: 8,
    backgroundColor: colors.greyLight
  }
})
