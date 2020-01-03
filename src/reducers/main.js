import { combineReducers } from 'redux';
import hasWatched from './hasWatched.js';
import movies from './movies';
import searchText from './searchText';


export default combineReducers({
  hasWatched,
  movies,
  searchText
});
