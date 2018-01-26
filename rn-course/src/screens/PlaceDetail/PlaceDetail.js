import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.place.key)
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.content}>
        <View>
          <Image source={this.props.place.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.place.name}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={this.placeDeletedHandler} color='red'
          >
            <View style={styles.deleteButton}>
              <Icon size={30} name='ios-trash' color='red' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 20
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  deleteButton: {
    alignItems: 'center'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);