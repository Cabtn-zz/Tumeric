import React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Asset, AppLoading } from 'expo';

import Home from './src/screens/HomeScreen';
import Prediction from './src/screens/Prediction';
import LearnMore from './src/screens/LearnMore';

const RootStack = createStackNavigator(
  {
  Home: { screen: Home },
  Prediction: { screen: Prediction },
  LearnMore: { screen: LearnMore },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#57c8f2'
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: 'Avenir' || 'System',
        color: "#fff",
      },
      headerTintColor: "#fff",
      animationEnabled: true,
    }
  }
);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <RootStack />;
  }


  async _cacheResourcesAsync() {
    const images = [
      require('./assets/images/splash.png'),

    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}
