import { combineReducers } from 'redux';
import searchString from './reducers/SearchString.js';
import items from './reducers/Items.js';

const itemsApp = combineReducers({
  searchString,
  items
});

export default itemsApp;
