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
          adUnitID="ca-app-pub-7263011545722087/5106793852"
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={this.bannerError} 
        />
      </View>
    )
  }
}

export default BannerAd;