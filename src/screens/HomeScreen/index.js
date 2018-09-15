import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import { ImagePicker, Permissions } from 'expo'


class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false, 
    }
    this._openCamera = this._openCamera.bind(this) // fix _onClick context
  }

 requestCameraPermissions = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status !== 'granted') {
      alert('Hey! You might want to enable the camera for my app, cuz you fucking need it.');
    }
    return this._openCamera;
  }

  requestCameraRollPermissions = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Hey! You might want to enable the camera for my app, cuz you fucking need it.');
    }
    return this._openCameraRoll;
  }

  _openCamera = async () => {
    // this.requestCameraPermissions();
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    this.props.navigation.navigate('Prediction', { image: result })

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  _openCameraRoll = async () => {
    // this.requestCameraPermissions();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this.props.navigation.navigate('Prediction', { image: result })

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  navigateHome = () => this.props.navigation.navigate('Prediction');

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Mellow Mole</Text>
        <Button
          title="Take a picture"
          onPress={ this._openCamera }
        />
        <Button
          title="Select from camera rolls"
          onPress={ this._openCameraRoll }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;