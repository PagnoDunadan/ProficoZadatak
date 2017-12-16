import item from './item';


export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export const deleteIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'DELETE_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const deleteHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'DELETE_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}



export const items = (state = [], action) => {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return [
        ...action.items
      ];
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
    case 'DELETE_ITEM_DATA_SUCCESS':
      return [
        ...state.filter((item) => item.id !== action.item.id)
      ];
    default:
      return state;
  }
};
