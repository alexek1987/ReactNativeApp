import React, { Component }from 'react';
import Feed from './feed';
import Menu from "./screens/drawer/Menu";
import Contact from "./screens/drawer/Contact";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
  createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Feed" component= {Feed} />

  </Stack.Navigator>
    return (
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack}  />
          <Drawer.Screen name="Menu" component={Menu}/>
          <Drawer.Screen name="Contact" component={Contact}/>
        </Drawer.Navigator>
      </NavigationContainer>
      )
  }
}
