import React from 'react';
import { 
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import BannerAd from '../../components/AdMobBanner';
import styles from './styles';

const FAQ = [
  { 
    question: 'How does Mellow Mole work?',
    answer: 'We use a artifical intelligence algorithm to determine the risk level of moles.',
  },
  { 
    question: 'What is melanoma?',
    answer: 'Melanoma is a cancer that begins in the melanocytes. Most melanoma cells still make melanin, so melanoma tumors are usually brown or black.'
  },
  {
    question: 'What are the symptoms?',
    answer: 'A new, unusual growth or a change in an existing mole. Melanoma can occur anywhere on the body.'
  },
  {
    question: 'Does Mellow Mole only check for melanoma?',
    answer: 'Yes, Mellow Mole only checks for melanoma, it should not be used for anything else.'
  },
  {
    question: 'The mole is covered with hair, will Mellow Mole still work if the mole is partially covered?',
    answer: 'We suggest you trim the area or have a friend help you take the picture. The clearer the picture the more accurate the results!'
  },
  {
    question: 'Does Mellow Mole replace the doctor?',
    answer: 'No, think of Mellow Mole as a service to provide awareness and educate you about skin health. For advice on medical action please consult your doctor.'
  },
  {
    question: 'Are the results 100% accurate?',
    answer: 'No, this is using artifical intelligence to determine the risk level. Please consult with a doctor before deciding to take any action'
  },
];

class LearnMore extends React.Component {
  static navigationOptions = {
    title: 'FAQ',
  }

  navigateHome = () => this.props.navigation.navigate('Home');
  navigateLearnMore = () => this.props.navigation.navigate('LearnMore')

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.listView }>
            <FlatList
            data={ FAQ }
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <Text style={ styles.questions }>Question: {item.question}</Text>
                <Text style={ styles.general }>Answer: {item.answer}</Text>
              </View>
            )
            }
          />
        </View>
      </View>
    );
  }
}

export default LearnMore;