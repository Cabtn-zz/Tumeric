import React from 'react';
import { 
  View,
} from 'react-native';
import {
  AdMobBanner,
} from 'expo';
import styles from './styles';

class BannerAd extends React.Component {
  render() {
    return (
      <View style={ styles.bannerAd }>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={this.bannerError} 
        />
      </View>
    )
  }
}

export default BannerAd;