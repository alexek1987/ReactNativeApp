import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/styles.js';
import MenuItem from '../../MenuItem';

Menu = () =>
  <View style={styles.container}>
   <View style={styles.overlayContainer}>
      <View style={styles.top}>
        <Text style={styles.header}>M E N U</Text>
      </View>
      <View style={styles.menuContainer}>
        <MenuItem itemImage={require('../../img/burger3.jpg')} />
        <MenuItem itemImage={require('../../img/burger1.jpeg')} />
        <MenuItem itemImage={require('../../img/burger2.jpeg')} />
        <MenuItem itemImage={require('../../img/burger3.jpg')} />
        <MenuItem itemImage={require('../../img/hotdog1.jpg')} />
        <MenuItem itemImage={require('../../img/burger2.jpeg')} />
        <MenuItem itemImage={require('../../img/burger1.jpeg')} />
        <MenuItem itemImage={require('../../img/hotdog1.jpg')} />
        <MenuItem itemImage={require('../../img/burger1.jpeg')} />
        <MenuItem itemImage={require('../../img/burger3.jpg')} />
      </View>
  </View>
</View>

export default Menu;
