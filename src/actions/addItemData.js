import { API_URL } from '../config/config'

const addItemIsLoading = (bool) => {
  return {
    type: 'ADD_ITEM_IS_LOADING',
    isLoading: bool
  }
}

const addItemHasErrored = (bool) => {
  return {
    type: 'ADD_ITEM_HAS_ERRORED',
    hasErrored: bool
  }
}

const addItemDataSuccess = (item) => {
  return {
    type: 'ADD_ITEM_DATA_SUCCESS',
    item
  }
}

const addItemData = (item) => {
  return (dispatch) => {
    dispatch(addItemIsLoading(true))

    fetch(API_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(addItemIsLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((id) => {
      item.id = id
      dispatch(addItemDataSuccess(item))
    })
    .catch(() => {
      dispatch(addItemHasErrored(true))
      dispatch(addItemIsLoading(false))
    })
  }
}

export default addItemData
