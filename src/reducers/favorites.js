import {
  POST_FAVORITE
} from '../actions';

const initialState = { 
  favorites: [],
}

const favorites = (state = initialState, action) => {
  switch(action.type) {
    case POST_FAVORITE:
      const favorite = { imageUrl: action.imageUrl }
      return {
        favorites: [...state.favorites,{...favorite} ]
      };
    default:
      return state
  }
}

export default favorites
