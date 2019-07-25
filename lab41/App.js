import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';


import HomePage from './Components/home';
import MapScreen from './Components/map';

const MainNavigator = createDrawerNavigator({
  Home: { screen : HomePage },
  Map : { screen : MapScreen },
});


export default createAppContainer(MainNavigator);