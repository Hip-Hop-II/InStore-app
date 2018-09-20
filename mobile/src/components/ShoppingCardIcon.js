import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { images } from '../utils/images'
import {connect} from 'react-redux'

class ShoppingCardIcon extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate('Shopping')
  }
  render() {
    const {addProducts} = this.props
    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.wrapper}>
        <Image source={images.shoppingCart} resizeMode="contain" style={styles.image} />
        {addProducts.length > 0 && <View style={styles.totalProductWrapper}>
          <Text style={styles.totalProductText}>{addProducts.length}</Text>
        </View> }
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative'
  },
  image: {
    width: 25,
    marginRight: 16
  },
  totalProductWrapper: {
    position: 'absolute',
    top: -2,
    right: 10,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  totalProductText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#Fff'
  }
})

export default connect(state => ({
  addProducts: state.productInfo.addProducts
}))(ShoppingCardIcon)
