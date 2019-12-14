import { combineReducers } from 'redux';
import series from './series';
import books from './books';
import favorites from './favorites';

export default combineReducers({
  series,books,favorites
})