const searchString = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_STRING':
      return action.searchString;
    default:
      return state;
  }
};

export default searchString;
