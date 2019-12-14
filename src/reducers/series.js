import {
  GET_ALL_SERIES,
} from '../actions';

const initialState = { 
  allSeries: []
}

const auths = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_SERIES:
      return {
        allSeries: action.allSeries
      }
    default:
      return state
  }
}

export default auths
