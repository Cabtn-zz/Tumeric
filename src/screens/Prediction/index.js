import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker'


class Prediction extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false, 
    }

    this._onClick = this._onClick.bind(this) // fix _onClick context

    this.options = {
      title: 'Select an image',
      takePhotoButtonTitle: 'Select a photo',
      chooseFromLibraryButtonTitle: 'Chose from library',
      cancelButtonTitle: 'HALT',
      cameraType: 'back',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'Seepizz'
      }
    }
  }

  _onClick() {
    this.setState({
      loading: true
    })

    ImagePicker.showImagePicker(this.options, response => {
      if (response.didCancel) {
        this.setState({
          loading: false,
        })
       } else if (response.error) {
          Alert.alert('Shit broke with the camera', {cancelable: false})
          this.setState({
            loading:false,
          })
        }
        else {
          Alert.alert('THIS SHIT WORKS');
        }
    })
  }

  navigateHome = () => this.props.navigation.navigate('Home');


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Button
          title="Home"
          onPress={ this.navigateHome }
        />
        <Button
          title="DO THE THINGS!"
          onPress={ this._onClick }
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

export default Prediction;