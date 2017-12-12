import item from './Item.js';

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    default:
      return state;
  }
};

export default items;
