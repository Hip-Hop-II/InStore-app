import React, { PureComponent } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import Proptypes from 'prop-types'
import { productImgs } from '../utils/images'
import {colors} from '../utils/colors'
import {Feather} from '@expo/vector-icons'
import { connect } from 'react-redux'
import {addProduct, removeProduct} from '../redux/actions/product'

const DUCTING_TIME = 200

class ProductCard extends PureComponent {
  static propTypes = {
    name: Proptypes.string,
    kgPrice: Proptypes.number,
    unityPrice: Proptypes.number,
    imageUrl: Proptypes.any
  }
  state = {
    isHover: false,
    qty: 1,
    cardOpacity: new Animated.Value(1),
    qtyOpactiy: new Animated.Value(0)
  }

  fadeIn = () => {
    Animated.parallel([
      Animated.timing(this.state.cardOpacity, {
        toValue: .4,
        duration: DUCTING_TIME
      }).start(),
      Animated.timing(this.state.qtyOpactiy, {
        toValue: 1,
        duration: DUCTING_TIME
      }).start()
    ])
  }
  
  fadeOut = () => {
    Animated.parallel([
      Animated.timing(this.state.cardOpacity, {
        toValue: 1,
        duration: DUCTING_TIME
      }).start(),
      Animated.timing(this.state.qtyOpactiy, {
        toValue: 0,
        duration: DUCTING_TIME
      }).start()
    ])

  }
  handlePlusPress = () => {
    const {id} = this.props
    this.fadeIn()
    this.setState({isHover: true})
    this.props.addProduct(id, this.state.qty)
  }

  handleInc = () => {
    const {id} = this.props
    this.setState(s => ({
      qty: s.qty + 1
    }))
    this.props.addProduct(id, this.state.qty + 1)
  }
  handleDec = () => {
    const {id} = this.props
    this.setState(s => ({
      qty: s.qty - 1
    }))
    this.props.removeProduct(id, this.state.qty - 1)
  }
  handleClose = (type) => {
    this.fadeOut()
    this.setState({
      isHover: false
    })
    type === 'clean' && this.props.removeProduct(this.props.id, this.state.qty - 1)
  }
  render() {
    const { isHover, qty, cardOpacity} = this.state
    const {name, imageUrl, kgPrice, unityPrice} = this.props
    return (
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={this.handleClose}>
          <Animated.View style={{opacity: cardOpacity}}>
            <View style={styles.imageWrapper}>
              <Image source={imageUrl} 
              resizeMode="contain"
              style={styles.img} />
            </View>
            <View style={styles.footer}>
              <Text style={{fontSize: 18}}> ${unityPrice} each </Text>
              <Text style={{fontSize: 14}}> {name} </Text>
              <Text style={{fontSize: 14}}> At ${kgPrice}/kg </Text>
            </View>
            <TouchableOpacity
            onPress={this.handlePlusPress}
            activeOpacity={.7} style={styles.plusWrapper}>
              <View style={[styles.plusContent, {backgroundColor: qty > 1 ? colors.green : colors.white}]}>
                {qty > 1 ? <Text style={{color: '#fff'}}>{qty}</Text> :
                <Feather name="plus" size={15} color={colors.green} />
              }
              </View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
          {isHover && (
            <View style={styles.plusNumberWrapper}>
              <Animated.View style={[styles.plusButton]}>
                {qty > 1 ? (
                <TouchableOpacity activeOpacity={.7} onPress={this.handleDec}>
                  <Feather name="minus" color={colors.green} size={20} />
                </TouchableOpacity>
                ) : (
                  <TouchableOpacity activeOpacity={.7} onPress={() => this.handleClose('clean')}>
                    <Feather name="trash-2" color={colors.green} size={20} />
                  </TouchableOpacity>
                )}
                <Text>{qty}</Text>
                <TouchableOpacity activeOpacity={.7} onPress={this.handleInc}>
                  <Feather name="plus" color={colors.green} size={20} />
                </TouchableOpacity>
              </Animated.View>
            </View>
          )}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 150,
    padding: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    position: "relative"
  },
  imageWrapper: {
    justifyContent: "center",
    marginTop: 15
  },
  img: {
    width: 120,
    height: 100
  },
  footer: {
    justifyContent: "center",
    alignItems: "center"
  },
  plusWrapper: {
    position: "absolute",
    top: 10,
    right: 5
  },
  plusContent: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderColor: colors.green,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 2
  },
  plusNumberWrapper: {
    position: "absolute",
    top: 10,
    right: 5,
    left: 10,
    zIndex: 99,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
  },
  plusButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6
  }
})

export default connect(undefined, {addProduct, removeProduct})(ProductCard)
