const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_DATA_SUCCESS':
      return {
        id: action.item.id,
        name: action.item.name,
        category: action.item.category,
        status: action.item.status,
        manufacturer: action.item.manufacturer,
        location: action.item.location,
        selected: false
      };
    default:
      return state;
  }
};

export default item;
