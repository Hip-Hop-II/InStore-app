import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import ProductCard from '../components/ProductCard'

export default class CategoryScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('name', 'InStore')
  })
  render() {
    return (
      <View style={styles.wrapper}>
        <ProductCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
})
