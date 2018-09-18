import React from 'react';
import { CLARIFAY_KEY } from 'react-native-dotenv'
import Clarifai from 'clarifai'
import { 
  ImagePicker,
  Permissions,
  AdMobInterstitial,
} from 'expo'
import {
  View,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator,
 } from 'react-native'
 import { Button } from 'react-native-elements';
 import Header from '../../components/Header';
 import BannerAd from '../../components/AdMobBanner';
 import styles from './styles';

const modelId = 'Mellow Mole';
const version = '66c34e031c264f6d8e468aaf5011f477';
const buttonStyles = {
  fontSize: 20,
  fontFamily: 'System',
  backgroundColor: '#57c8f2',
  color: '#fff',
  raised: true,
}

class Prediction extends React.Component {
  constructor() {
    super();

    this.state = {
      malignant: false,
      loading: true,
      riskLevel: '',
    }
  }
  componentDidMount() {
    const clarifai = new Clarifai.App({
      apiKey: CLARIFAY_KEY
    })

    process.nextTick = setImmediate // RN polyfill
    const { base64 } = this.props.navigation.state.params.image
    const file = { base64: base64 }

    clarifai.models.predict({id: modelId, version: version }, file)
    .then(response => {
      const { concepts } = response.outputs[0].data
      if (concepts) {
        const [moleData] = concepts.filter(concept => concept.name === 'malignant');
        if (moleData.value > 0.95) {
          this.setState({ 
            malignant: true,
            loading: false,
            riskLevel: moleData.value 
          })
          Alert.alert(
            'The results suggests you should get this checked out',
            null,
            [{ text: 'OK', onPress: () => this.showAd() },],
            { cancelable: false }
          );
        }
        this.setState({
          loading: false,
          riskLevel: moleData.value 
        })
        Alert.alert(
          'Looks good!',
          null,
          [{ text: 'OK', onPress: () => this.showAd() },],
          { cancelable: false }
        );
      }
    })
    .catch( e => {
      Alert.alert(
        'Failed to load results.',
        'Please try again.',
        [{ text: 'OK', onPress: () => this.navigateHome() },],
        { cancelable: false }
      )
    })
  }

  showAd = async () => {
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  }

  determineRiskLevel() {
    console.log(this.state.riskLevel);
    if (this.state.riskLevel > 0.95) {
      return 'High';
    }
    if (this.state.riskLevel > 0.80 && this.state.riskLevel < 0.95) {
      return 'Medium';
    }
    return 'Low';
  }

  navigateHome = () => this.props.navigation.navigate('Home');

  render() {
    return (
      <View style={ styles.container }>
        <Header />
        <ScrollView contentContainerStyle={ styles.scrollView }>
          <Text style={ styles.text }>Your results are being analyzed.</Text>
          <Text style={ styles.text }>Thank you for your patience.</Text>
          <View style={ styles.spacer }/>
          { this.state.loading ? 
            <ActivityIndicator size="large" color="#0000ff" /> :
            (
            <View style={ styles.center }>
              <Text style={ styles.text }>Risk Level: { this.determineRiskLevel() }</Text>
              <View style={ styles.spacer }/>
              <Button
                title="Home"
                { ...buttonStyles }
                icon={{name: 'home', type: 'feather', size: 40,}}
                onPress={ this.navigateHome }
              />
            </View>
            )
          }
        </ScrollView>
        <BannerAd />
      </View>
    );
  }
}

export default Prediction;