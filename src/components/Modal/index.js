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
import styles from './styles';

export default class TCModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <ScrollView>
              <Text>{Terms}</Text>
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