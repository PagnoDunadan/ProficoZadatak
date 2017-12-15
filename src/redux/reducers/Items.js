import item from './Item.js';

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'SET_ITEMS':
      return [
        ...action.items
      ];
    case 'DELETE_ITEM':
      return [
        ...state.filter((item) => item.id !== action.id)
      ];
    default:
      return state;
  }
};

export default items;
