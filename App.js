import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import Prediction from './src/screens/Prediction';

const RootStack = createStackNavigator(
  {
  Home: { screen: HomeScreen },
  Prediction: { screen: Prediction }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
