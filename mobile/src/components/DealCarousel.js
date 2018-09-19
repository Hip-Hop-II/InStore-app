import React, { PureComponent } from 'react'
import {
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  View
} from 'react-native'
import PropTypes from 'prop-types'

const {width: WIDTH} = Dimensions.get('window')

const images = [
  require('../../assets/img/food1.png'),
  require('../../assets/img/food2.png'),
  require('../../assets/img/food3.png')
]

const DOT_SIZE = 8

const TIME = 3000

export default class DealCarousel extends PureComponent {
  static propTypes = {
  }
  constructor (props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
    this.scrollView = React.createRef()
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.handleScroll()
    }, TIME)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    this.timer = null
  }

  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1

    if (newIndex < images.length) {
      this.scrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true
      })
      this.setState({currentIndex: newIndex})
    } else {
      this.scrollView.current.scrollTo({
        x: 0,
        animated: true
      })
      this.setState({currentIndex: 0})
    }
  }

  onScroll = event => {
    const {contentOffset} = event.nativeEvent

    const currentIndex = Math.round(contentOffset.x / WIDTH)

    if (this.state.currentIndex !== currentIndex) {
      this.setState({currentIndex})
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={this.scrollView}
        onScroll={this.onScroll}
        scrollEventThrottle={16}
        >
          {images.map((img, index) => (
            <Image source={img} key={index} />
          ))}
        </ScrollView>
        <View style={styles.dotWrapper}>
          {Array.from({length: images.length}).map((_, index) => (
            <View style={[styles.dotItem, {
              backgroundColor: this.state.currentIndex === index ? 'black' : 'transparent'
            }]} key={index}></View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative"
  },
  dotWrapper: {
    position: "absolute",
    flexDirection: 'row',
    left: Dimensions.get('window').width / 2 - 22,
    bottom: 6
  },
  dotItem: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: DOT_SIZE,
    margin: DOT_SIZE / 2,
    backgroundColor: "black"
  }
})
