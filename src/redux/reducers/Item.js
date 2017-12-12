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
    default:
      return state;
  }
};

export default item;
