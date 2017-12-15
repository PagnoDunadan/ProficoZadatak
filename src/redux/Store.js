import { applyMiddleware, combineReducers, createStore } from 'redux';
import searchString from './reducers/SearchString.js';
import items from './reducers/Items.js';
//import axios from 'axios';
import thunk from "redux-thunk";

const itemsApp = combineReducers({
  searchString,
  items
});

const middleware = applyMiddleware(thunk)

const store = createStore(itemsApp, middleware);

// axios.delete('http://192.168.1.10:3001/items/3')
//   .then((response) => {
//     console.log(response);
//   });

// axios.post('http://192.168.1.10:3001/items', {
//     name: 'Name',
//     category: 'Category',
//     status: 'Status',
//     manufacturer: 'Manufacturer',
//     location: 'Location'
//   })
//   .then((response) => {
//     console.log(response);
//   });

// axios.get('http://192.168.1.10:3001/items')
//   .then((response) => {
//     for (let i = 0; i < response.data.length; i++) {
//       store.dispatch({
//         type: 'ADD_ITEM',
//         id: response.data[i].rowid,
//         name: response.data[i].name,
//         category: response.data[i].category,
//         status: response.data[i].status,
//         manufacturer: response.data[i].manufacturer,
//         location: response.data[i].location
//       })
//     }
//   });


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
