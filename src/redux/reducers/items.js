import item from './item'

export const fetchItemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const fetchItemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const addItemIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ADD_ITEM_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const addItemHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ADD_ITEM_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const deleteItemIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const deleteItemHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEM_DATA_SUCCESS':
      return [
        ...action.items
      ]
    case 'ADD_ITEM_DATA_SUCCESS':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'DELETE_ITEM_DATA_SUCCESS':
      return [
        ...state.filter((item) => item.id !== action.item.id)
      ]
    default:
      return state
  }
}
