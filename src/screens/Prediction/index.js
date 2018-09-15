import React from 'react';
import { CLARIFAY_KEY } from 'react-native-dotenv'
import Clarifai from 'clarifai'
import { ImagePicker, Permissions } from 'expo'
import { 
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Alert,
  StyleSheet,
  Button,
 } from 'react-native'


class Prediction extends React.Component {

  componentDidMount() {
    const clarifai = new Clarifai.App({
      apiKey: CLARIFAY_KEY
    })

    process.nextTick = setImmediate // RN polyfill
    const { data } = this.props.navigation.state.params.image
    const file = { base64: data }

    clarifai.models.predict(Clarifai.FOOD_MODEL, file).
    then(response => {
      const { concepts } = response.outputs[0].data
      if (concepts && concepts.lengths > 0) {
        for (const prediction of concepts) {
          if (prediction.name === 'pizza' 
                && prediction.value >= 0.99) {
              Alert.alert('PIZZA')
              return this.setState({ 
                loading: false,
                result: 'Pizza'
              })
            }
            this.setState({ result: 'Not Pizza' })
            Alert.alert('No PIZZA')
        }
      }
      this.setState({ loading: false })
    })
    .catch( e => {
      Alert.alert(
        'Shit broke',
        'Seriously it broke',
        [{ text: 'OK', onPress: () => this.navigateHome() },],
        { cancelable: false }
      )
    })
  }
  
  navigateHome = () => this.props.navigation.navigate('Home');

  render() {
    return (
      <View style={styles.container}>
        <Text>Your results are being analyzed.</Text>
        <Text>Please be patient.</Text>
          { this.props.navigation.state.params.image &&
            <Text> Looks like we have an image</Text>
          }
        <Button
          title="Home"
          onPress={ this.navigateHome }
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