import React from 'react';
import { 
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';

class Header extends React.Component {
  render() {
    return (
      <View style={ styles.header }>
        <Text style={ styles.title }>
          Mellow Mole
        </Text>
        <Image 
          source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
          style={ styles.logo } 
        />
      </View>
    )
  }
}

export default Header;