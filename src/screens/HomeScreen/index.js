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
import BannerAd from '../../components/AdMobBanner';
import styles from './styles';

const buttonStyles = {
  fontSize: 20,
  fontFamily: 'Avenir' || 'System',
  backgroundColor: '#57c8f2',
  color: '#fff',
  raised: true,
}


class Home extends React.Component {
static navigationOptions = {
  title: 'Home',
}

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
  
  navigateHome = () => this.props.navigation.navigate('Home');
  navigateLearnMore = () => this.props.navigation.navigate('LearnMore')

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.spacer }></View>
        <View style={ styles.center }>
          <Text style={ styles.text }> Welcome to Mellow Mole! </Text>
          <View style={ styles.bigSpacer }></View>
          <Text style={ styles.text }>To get started</Text>
          <View style={ styles.bigSpacer }></View>
          <Text style={ styles.text }>Just take a picture of a mole</Text>
          <View style={ styles.bigSpacer }></View>
          <Image style={ styles.logo } source={require('../../../assets/images/logo.png')} />
        </View>
        <ScrollView>
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
          <View style={ styles.spacer }></View>
          <Button
            title='FAQ'
            { ...buttonStyles }
            icon={{name: 'question', type: 'evilicon', size: 30,}}
            onPress={ this.navigateLearnMore }
          />
        </ScrollView>
        <BannerAd />
      </View>
    );
  }
}

export default Home;