import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DefaultInput from '../ui/DefaultInput/DefaultInput';


const PlaceInput = (props) => (
  <View style={styles.inputContainer}>
    <DefaultInput
      style={styles.placeInput}
      placeHolder={props.placeHolder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
    <Button
      style={styles.placeButton}
      title={props.buttonTitle || 'Add'}
      onPress={props.onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '80%'
  },
  placeButton: {
    width: '20%'
  }
});

export default PlaceInput;