import { createStore } from 'redux';
import itemsApp from './CombineReducers.js';

const store = createStore(itemsApp);

export default store;
