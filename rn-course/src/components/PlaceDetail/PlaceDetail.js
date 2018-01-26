import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace != null} onRequestClose={props.onModalClosed}>
      <View style={styles.modalContent}>
        {modalContent}
        <View>
          <TouchableOpacity onPress={props.onItemDeleted} >
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContent: {
    margin: 20
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});

export default placeDetail;