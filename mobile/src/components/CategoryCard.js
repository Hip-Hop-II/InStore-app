import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import {withNavigation} from 'react-navigation'

class CategoryCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.any
  }
  handlePress = () => {
    this.props.navigation.navigate("Category", { name: this.props.title });
  }

  render() {
    const { title, image } = this.props
    return (
      <TouchableOpacity style={styles.wrapper} activeOpacity={.7} onPress={this.handlePress}>
        {image && (
          <View style={styles.imageWrapper}>
            <Image source={image} />
          </View>
        )}
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageWrapper: {
    justifyContent: "center",
    marginBottom: 6
  }
})

export default withNavigation(CategoryCard)
