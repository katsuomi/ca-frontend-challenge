import { combineReducers } from 'redux';
import series from './series';
import books from './books';

export default combineReducers({
  series,books,favorites
})