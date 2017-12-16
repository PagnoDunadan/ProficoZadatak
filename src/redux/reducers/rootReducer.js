import { combineReducers } from 'redux';
import searchString from './searchString';
import { items,
  itemsHasErrored,
  itemsIsLoading,
  deleteHasErrored,
  deleteIsLoading
} from './items';

const rootReducer = combineReducers({
  searchString,
  items,
  itemsHasErrored,
  itemsIsLoading,
  deleteHasErrored,
  deleteIsLoading
});

export default rootReducer;
