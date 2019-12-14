import {
  GET_BOOK
} from '../actions';

const initialState = { 
  book: {},
}

const books = (state = initialState, action) => {
  switch(action.type) {
    case GET_BOOK:
      return {
        book: action.book
      }
    default:
      return state
  }
}

export default books
