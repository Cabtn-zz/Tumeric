import React, { Component, PropTypes } from "react";
import {
  AsyncStorage,
  Modal,
  View,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";
import styles from './styles';
import { Icon } from 'react-native-elements';
import TCModal from '../../components/Modal';

const disclaimer = 'By using Mellow Mole you agree that you understand the following:'

export default class FirstTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  componentDidMount() {
    AsyncStorage.getItem(this.props.pagekey, (err, result) => {
      if (err) {
      } else {
        if (result == null) {
          console.log("null value recieved", result);
          this.setModalVisible(true);
        } else {
          console.log("result", result);
        }
      }
    });
    AsyncStorage.setItem(this.props.pagekey, JSON.stringify({"value":"true"}), (err,result) => {
            console.log("error",err,"result",result);
            });
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
    render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          style={styles.ftreContainer}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.ftreContainer}>
            <View style={styles.ftreTitleContainer}>
              <Text style={styles.ftreTitle}>{this.props.title}</Text>
            </View>
            <View style={styles.ftreDescriptionContainer}>
              <Text style={styles.ftreDescription} allowFontScaling={true}>
                { disclaimer }
              </Text>
              <View>
                <View style={ styles.bigSpacer } />
                <FlatList
                  data={[
                    {key: "Mellow Mole is not meant to replace the advice and diagnosis of a medical professional."},
                    {key: "Any information you receive through Mellow Mole is not to be used as medical advice."},
                    {key: "Mellow Mole's primary use is to educate and raise awareness around skin health."},
                  ]}
                  renderItem={({item}) => (
                    <View>
                      <Icon
                        name='heart'
                        type='foundation'
                        color='#57c8f2'
                      />
                      <Text style={styles.item}>
                        {item.key}
                      </Text>
                    </View>
                  )}
                />
            </View>
            </View>
            <TCModal title='Terms and Conditions'/>
            <View style={styles.ftreExitContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <View style={styles.ftreExitButtonContainer}>
                  <Text style={styles.ftreExitButtonText}>Agree</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}