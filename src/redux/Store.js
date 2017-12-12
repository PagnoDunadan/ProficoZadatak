import { combineReducers, createStore } from 'redux';
import searchString from './reducers/SearchString.js';
import items from './reducers/Items.js';

const itemsApp = combineReducers({
  searchString,
  items
});

const store = createStore(itemsApp);

export default store;
