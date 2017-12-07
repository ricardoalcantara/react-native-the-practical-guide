import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/places'

class App extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = (val) => {
    this.setState({ placeName: val })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onAddPlace(this.state.placeName);
  }

  placeSelecthandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeHolder="An awesome place"
          buttonTitle="Add"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          onPress={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelecthandler}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);