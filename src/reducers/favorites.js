import {
  POST_FAVORITE
} from '../actions';

const initialState = { 
  allFavorites: [],
}

const favorites = (state = initialState, action) => {
  switch(action.type) {
    case POST_FAVORITE:
      const favorite = { index: action.index ,id: action.bookId,imageUrl: action.imageUrl }
      return {
        allFavorites: [...state.allFavorites,{...favorite} ]
      };
    default:
      return state
  }
}

export default favorites
