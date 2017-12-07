import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.payload,
          image: {
            uri: 'http://blog.emania.com.br/content/uploads/2015/12/paisagem-tropical-wallpaper-1.jpg'
          }
        })
      };
    }
    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter(place => place.key !== state.selectedPlace.key),
        selectedPlace: null
      };
    }
    case SELECT_PLACE: {
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.payload)
      };
    }
    case DESELECT_PLACE: {
      return {
        ...state,
        selectedPlace: null
      };
    }
    default: return state;
  }
};

export default reducer;