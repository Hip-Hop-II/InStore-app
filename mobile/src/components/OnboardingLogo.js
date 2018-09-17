import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import {images} from '../utils/images'

export default () => (
  <View style={styles.container}>
    <Image source={images.logo} />
    <View style={styles.textWrapper}>
      <Text style={styles.text}>In</Text><Text style={styles.textEnd}>Store</Text>
    </View>
    <Text style={styles.word}> easy grocery shopping </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5
  },
  text: {
    fontSize: 24
  },
  textEnd: {
    fontSize: 24,
    color: 'green'
  },
  word: {
    fontSize: 16,
    fontWeight: '300'
  }
})
