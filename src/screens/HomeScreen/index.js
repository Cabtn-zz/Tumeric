import React from 'react';
import { 
  Text,
  View,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import { ImagePicker, Permissions, AdMobInterstitial, } from 'expo'
import Header from '../../components/Header';
import BannerAd from '../../components/AdMobBanner';
import styles from './styles';

const buttonStyles = {
  fontSize: 20,
  fontFamily: 'System',
  backgroundColor: '#57c8f2',
  color: '#fff',
  raised: true,
}


class Home extends React.Component {

 requestCameraPermissions = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Mellow mole requires access to the camera to run its analyis');
    }
    return this._openCamera;
  }

  requestCameraRollPermissions = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Mellow mole requires access to the camera roll to run its analyis');
    }
    return this._openCameraRoll;
  }

  _openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.navigation.navigate('Prediction', { image: result })
    }
  };
  
  _openCameraRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      this.props.navigation.navigate('Prediction', { image: result })
    }
  };

  componentDidMount() {
    this.requestCameraPermissions();
    this.requestCameraRollPermissions();
  }
  
  navigateLearnMore = () => this.props.navigation.navigate('LearnMore')

  render() {
    return (
      <View style={ styles.container}>
        <Header />
        <ScrollView contentContainerStyle={ styles.container }>
          <Button
            title="Take a picture"
            onPress={ this._openCamera }
            { ...buttonStyles }
            icon={{name: 'camera', type: 'evilicon', size: 40,}}
            accessibilityLabel='Take a picture with your phone'
          />
          <View style={ styles.spacer }></View>
          <Button
            title="Select from camera roll"
            onPress={ this._openCameraRoll }
            { ...buttonStyles }
            icon={{name: 'image', type: 'evilicon', size: 40,}}
            accessibilityLabel='Select a picture from your phone'
          />
        </ScrollView>
        <View style={ styles.learnMore}>
          <Button
            title= 'FAQ'
            onPress={ this.navigateLearnMore }
            { ...buttonStyles }
            icon={{name: 'question', type: 'evilicon', size: 30,}}
            accessibilityLabel='Learn more about mellow mole'
          />
        </View>
        <BannerAd />
      </View>
    );
  }
}

export default Home;