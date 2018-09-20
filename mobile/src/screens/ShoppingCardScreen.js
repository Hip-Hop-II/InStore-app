import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import CartItem from '../components/CartItem'
import { colors } from '../utils/colors'

class ShoppingCardScreen extends PureComponent {
  static navigationOptions = ({navigaiton}) => ({
    title: 'My Cart'
  })

  renderList = () => {
    const {addProducts} = this.props
    if (addProducts.length === 0) {
      return (
        <Text> Cart Empty</Text>
      )
    }
    return (
      <FlatList 
      data={addProducts}
      renderItem={this.renderItem}
      keyExtractor={this.keyExtractor}
      />
    )
  }

  keyExtractor = (item) => {
    return String(item.id)
  }
  renderItem = ({item}) => {
    return (
      <CartItem {...item} />
    )
  }

  renderCheckoutButton = () => {
    const {addProducts, totalPrice} = this.props
    if (addProducts.length === 0) {
      return null
    }
    return (
      <View style={styles.checkoutButtonWrapper}>
        <TouchableOpacity activeOpacity={.7}>
          <View style={styles.checkoutButtonContent}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
            <View style={styles.totalPriceWrapper}>
              <Text style={styles.totalPriceText}>${totalPrice.toFixed(2)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderList()}
        {this.renderCheckoutButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 10
  },
  checkoutButtonWrapper: {
    backgroundColor: colors.white,
    padding: 6
  },
  checkoutButtonContent: {
    height: 45,
    backgroundColor: colors.grey,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  checkoutButtonText: {
    color: colors.white,
    fontWeight: 'bold'
  },
  totalPriceWrapper: {
    position: 'absolute',
    padding: 10,
    borderRadius: 6,
    backgroundColor: colors.greyDark,
    right: 20
  },
  totalPriceText: {
    color: colors.white,
  }
});

export default connect(state => ({
  addProducts: state.productInfo.addProducts,
  totalPrice: state.productInfo.totalPrice
}))(ShoppingCardScreen);
