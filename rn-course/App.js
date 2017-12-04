import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

import placeImage from './src/assets/beautiful-place.jpg';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (val) => {
    this.setState({ placeName: val })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: prevState.placeName,
          image: placeImage
        })
      }
    });
  }

  placeDeletehandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== key)
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput
          placeHolder="An awesome place"
          buttonTitle="Add"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          onPress={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemPressed={this.placeDeletehandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Just to remember
    // padding: ((Platform.OS === 'ios') ? 26 : 0),
    padding: 16,
    backgroundColor: '#fff',
    // flexDirection default value is column
    // flexDirection: 'column',
    // justifyContent adjust the main direction (same direction of flexDirection)
    justifyContent: 'flex-start',
    // justifyContenxt adjust the cross direction (the other direction from flexDirection)
    alignItems: 'center',
  }
});
