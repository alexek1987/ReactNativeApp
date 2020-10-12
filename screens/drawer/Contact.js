import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/styles.js';
import Autolink from 'react-native-autolink';

Contact = () =>
  <View style={styles.container}>
   <View style={styles.overlayContainer}>
      <View style={styles.top}>
        <Text style={styles.header}>C O N T A C T</Text>
      </View>
      <View style={styles.textContainer}>

      <Text style={styles.text}>
        {'📞 888-4545-45'}
      </Text>

      <Text style={styles.text}>
        {'✉️ '}
       <AutoLink
         text="Email (mailto:alexek1987@icloud.com)"
       />
      </Text>

      <Text style={styles.text}>
        {'📍 Burger Plaza, Easy Ave, Kalmar, Sweden'}
      </Text>

      </View>
  </View>
</View>

export default Contact;
