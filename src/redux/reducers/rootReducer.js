import { combineReducers } from 'redux'
import searchString from './searchString'
import { items,
  fetchItemsIsLoading,
  fetchItemsHasErrored,
  addItemIsLoading,
  addItemHasErrored,
  deleteItemIsLoading,
  deleteItemHasErrored
} from './items'

const rootReducer = combineReducers({
  searchString,
  items,
  fetchItemsIsLoading,
  fetchItemsHasErrored,
  addItemIsLoading,
  addItemHasErrored,
  deleteItemIsLoading,
  deleteItemHasErrored
})

export default rootReducer
