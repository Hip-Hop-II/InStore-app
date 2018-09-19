import React, { PureComponent } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import ProductCard from '../components/ProductCard'
import {connect} from 'react-redux'
import {getProducts} from '../redux/actions/product'

const products = [
  {
    id: '1',
    name: 'Red Apple',
    imageUrl: require('../../assets/img/products/apple.png'),
    kgPrice: 10.12,
    unityPrice: 1.9,
  },
  {
    id: '2',
    name: 'Tomato',
    imageUrl: require('../../assets/img/products/tomato.png'),
    kgPrice: 9.51,
    unityPrice: 1.25,
  }
]

class CategoryScreen extends PureComponent {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('name', 'InStore')
  })
  componentDidMount = () => {
    this.props.getProducts()
  }
  
  render() {
    console.log(this.props)
    return (
      <View style={styles.wrapper}>
        {this.props.products.map((product, i) => (
          <ProductCard {...product} key={i} />
        ))}
      </View>
    )
  }
}

export default connect(state => ({
  products: state.productInfo.products
}), {getProducts})(CategoryScreen)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  }
})
