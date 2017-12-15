import { applyMiddleware, combineReducers, createStore } from 'redux';
import searchString from './reducers/SearchString.js';
import { items, itemsHasErrored, itemsIsLoading } from './reducers/Items.js';
import thunk from "redux-thunk";

const itemsApp = combineReducers({
  searchString,
  items,
  itemsHasErrored,
  itemsIsLoading
});

const middleware = applyMiddleware(thunk)

const store = createStore(itemsApp, middleware);


// fetch('http://192.168.1.10:3001/items')
// .then(res => res.json())
// .then(items => {
//   console.log(items)
//   for (let i = 0; i < items.length; i++) {
//     store.dispatch({
//       type: 'ADD_ITEM',
//       id: items[i].rowid,
//       name: items[i].name,
//       category: items[i].category,
//       status: items[i].status,
//       manufacturer: items[i].manufacturer,
//       location: items[i].location
//     })
//   }
// });

// fetch('http://192.168.1.10:3001/items', {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Name',
//     category: 'Category',
//     status: 'Status',
//     manufacturer: 'Manufacturer',
//     location: 'Location'
//   })
// })
// .then(res => res.json())
// .then(id => {
//   console.log(id);
// })

// fetch('http://192.168.1.10:3001/items/1', {
//   method: 'delete'
// })
// .then(res => {
//   console.log(res.status);
// })

export default store;
