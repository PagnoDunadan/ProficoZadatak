import { combineReducers } from 'redux';
import searchString from './searchString';
import { items, itemsHasErrored, itemsIsLoading } from './items';

const rootReducer = combineReducers({
  searchString,
  items,
  itemsHasErrored,
  itemsIsLoading
});

export default rootReducer;
