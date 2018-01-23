import React, { Component } from 'react';
import { Keyboard, View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeName: ''
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  placeNameTextChanged = (placeName) => {
    this.setState({
      placeName
    })
  }

  placeAddedHandler = () => {
    if (this.state.placeName === '') {
      return;
    }

    this.props.onAddPlace(this.state.placeName);
    Keyboard.dismiss();

    this.setState({
      placeName: ''
    });
  }

  render() {
    return (
      <View>
        <PlaceInput
          value={this.state.placeName}
          onPress={this.placeAddedHandler}
          onChangeText={this.placeNameTextChanged}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);