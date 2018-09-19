import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  StatusBar
} from 'react-native'
import CategoryCard from '../components//CategoryCard'
import { colors } from '../utils/colors'
import DealCarousel from '../components/DealCarousel'

const categories = [
  {
    id: 1,
    title: "Grocery",
    image: require("../../assets/img/cart.png")
  },
  {
    id: 2,
    title: "Drugs",
    image: require("../../assets/img/drugs.png")
  },
  {
    id: 3,
    title: "Pets",
    image: require("../../assets/img/pets.png")
  },
  {
    id: 4,
    title: "video games"
  }
]

const NUM_COLUMNS = 3


class HomeScreen extends Component {
  static navigationOptions = {
    title: "InStore"
  };

  renderItem = ({item, index}) => {
    let borderstyle = {}

    if (index % NUM_COLUMNS !== 0) {
      borderstyle.borderLeftWidth = 2
      borderstyle.borderLeftColor = colors.greyLighter
    }
    return (
      <View style={[styles.categoryItem, borderstyle]}>
        <CategoryCard {...item} />
      </View>
    )
  }
  keyExtractor = item => String(item.id)
  separator = () => (
    <View style={styles.separatorView}></View>
  )
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle="light-content" />
        <View style={styles.carouselWrapper}>
          <DealCarousel />
        </View>
        <View style={styles.cardWrapper}>
          <FlatList data={categories} renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          numColumns={NUM_COLUMNS}
          ItemSeparatorComponent={this.separator}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  carouselWrapper: {
    height: 130
  },
  cardWrapper: {
    flex: 1
  },
  separatorView: {
    height: 2,
    backgroundColor: colors.greyLighter
  },
  categoryItem: {
    width: Dimensions.get("window").width / NUM_COLUMNS,
    backgroundColor: colors.white,
    height: 120
  }
});

export default HomeScreen
