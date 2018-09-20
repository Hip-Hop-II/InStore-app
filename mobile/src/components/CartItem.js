import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types'
import { colors } from '../utils/colors'
import {Feather} from '@expo/vector-icons'

export default class CartItem extends PureComponent {
  static propTypes = {

  }
  removePress = () => {

  }
  render() {
    const {imageUrl, num, name, kgPrice, unityPrice} = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image source={imageUrl} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.captionWrapper}>
          <Text style={styles.captionName}> {name} </Text>
          <Text style={styles.captionPrice}>At ${kgPrice}/kg</Text>
          <TouchableOpacity style={styles.removeButton} onPress={this.removePress}>
            <Feather name="trash-2" size={20} color={colors.green} />
            <Text style={{marginLeft: 5}}>Remove</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightWrapper}>
          <View style={styles.numberWrapper}>
            <Text style={styles.number}>{num}</Text>
          </View>
          <Text style={styles.unityPrice}>${unityPrice}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white
  },
  rightWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 5
  },
  imageWrapper: {
    flex: 0.3,
    marginRight: 10
  },
  image: {
    width: "100%",
    height: 100
  },
  captionName: {
    fontWeight: "bold"
  },
  captionPrice: {
    marginVertical: 7
  },
  captionWrapper: {
    justifyContent: "center"
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  numberWrapper: {
    width: 45,
    height: 35,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  unityPrice: {
    marginLeft: 30
  }
});
