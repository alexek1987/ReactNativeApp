import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';
import { styles } from './styles/styles';

import PopularItem from './PopularItem';

class Feed extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./img/background.jpg')}
        style={styles.container}>



            <View style={styles.overlayContainer}>

              <View style={styles.top}>
                <Text style={styles.header}>H O M E</Text>
              </View>

              <View style={styles.top}>
               <Text style={styles.headerTwo}>POPULAR</Text>
              </View>


               <View style={styles.menuContainer}>
               <PopularItem itemImage={require('./img/burger1.jpeg')} />
               <PopularItem itemImage={require('./img/burger2.jpeg')} />
               <PopularItem itemImage={require('./img/burger3.jpg')} />
               <PopularItem itemImage={require('./img/hotdog1.jpg')} />



             </View>

            </View>




        </ImageBackground>
      );
    }
  }

export default Feed;





