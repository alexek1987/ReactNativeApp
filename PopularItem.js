import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

export default class PouplarItem extends React.Component {
  render() {
    return (
      <View style={styles.popularItem}>
        <Image
        source={this.props.itemImage}
        style={styles.image} />
      </View>
       )
  }
}

const styles = StyleSheet.create({
  popularItem: {
    height: '50%',
    width: '50%',
    padding: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    borderWidth: 2,
    borderColor: '#fff'
  }
})