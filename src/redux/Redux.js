import { createStore } from 'redux';
import { combineReducers } from 'redux';

const searchString = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_STRING':
      return action.searchString;
    default:
      return state;
  }
};

const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        category: action.category,
        status: action.status,
        manufacturer: action.manufacturer,
        location: action.location,
        selected: false
      };
    // case 'TOGGLE_SELECTED':
    //   if (state.id !== action.id) {
    //     return state;
    //   }
    //   return {
    //     ...state,
    //     selected: !state.selected
    //   };
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    // case 'TOGGLE_SELECTED':
    //   return state.map(t => item(t, action));
    default:
      return state;
  }
};

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// };

const itemsApp = combineReducers({
  searchString,
  items,
  // visibilityFilter
});

const store = createStore(itemsApp);

export default store;
