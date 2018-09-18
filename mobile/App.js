import React from 'react'
import Navigation from './src/screens/'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

import {images} from './src/utils/images'
import {cacheImages} from './src/utils/cacheImages'
import {NavigationService} from './src/api/NavigationService'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  componentDidMount () {
    this.cacheAssets()
  }
  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images))

    await Promise.all([...imagesAssets])

    this.setState({
      isReady: true
    })
  }


  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large"  />
        </View>
      )
    }
    return (
      <Navigation ref={r => NavigationService.setTopLevelNavigator(r)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
