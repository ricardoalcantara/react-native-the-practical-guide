import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
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
        places: state.places.filter(place => place.key !== action.payload.placeKey),
      };
    }
    default: return state;
  }
};

export default reducer;