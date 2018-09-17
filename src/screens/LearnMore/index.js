import React from 'react';
import { 
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const FAQ = [
  { 
    question: 'How does Mellow Mole work?',
    answer: 'We use a machine learning algorithm to determine the risk level of your moles.',
  },
  {
    question: 'My mole is covered with hair, will Mellow mole still work if the mole is partially covered?',
    answer: 'We suggest you trim the area or have a friend help you take the picture. The clearer the picture the more accurate the results!'
  },
  {
    question: 'Does Mellow Mole replace the doctor?',
    answer: 'No, think of Mellow Mole as a service to provide an educated guess. For advice on medical action please consult your doctor.'
  },
  {
    question: 'Are the results 100% accurate?',
    answer: 'No, this is using artifical intelligence to determine the risk level. Please consult with a doctor before deciding to take any action'
  },
];

class LearnMore extends React.Component {
  render() {
    return (
      <View style={ styles.listView }>
        <Header />
        <FlatList
        data={ FAQ }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={ styles.questions }>Question: {item.question}</Text>
            <Text style={ styles.general }>Answer: {item.answer}</Text>
            <Text></Text>
          </View>
        )
        }
      />
      </View>
    );
  }
}

export default LearnMore;