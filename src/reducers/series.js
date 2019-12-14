import {
  GET_ALL_SERIES,GET_SERIES
} from '../actions';

const initialState = { 
  allSeries: [],
  series: {}
}

const series = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_SERIES:
      return {
        allSeries: action.allSeries
      }
    case GET_SERIES:
      return {
        series: action.series
      }
    default:
      return state
  }
}

export default series
