import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
          <Button title="Delete" onPress={props.onItemDeleted} color='red' />
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
  }
});

export default placeDetail;