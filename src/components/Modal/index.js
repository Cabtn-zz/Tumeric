import React, {Component} from 'react';
import {
  Modal,
  Text,
  Button,
  TouchableHighlight,
  View,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Terms from '../../content/Terms';
import Privacy from '../../content/PrivacyPolicy';
import styles from './styles';

export default class CustomModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  determineModalContent(notTerms) {
    return notTerms ? Privacy : Terms;
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.container}>
            <ScrollView>
              <Text>{ this.determineModalContent(this.props.notTerms) }</Text>
              <View style={styles.exitContainer}>
                <View style={styles.exitButtonContainer}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={styles.exitButtonText}>Close</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.openText}>
            { this.props.title }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}