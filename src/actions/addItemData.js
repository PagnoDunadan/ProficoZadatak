import { API_URL } from '../config/config'

const addHasErrored = (bool) => {
  return {
    type: 'ADD_HAS_ERRORED',
    hasErrored: bool
  }
}

const addIsLoading = (bool) => {
  return {
    type: 'ADD_IS_LOADING',
    isLoading: bool
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
    dispatch(addIsLoading(true))

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
      dispatch(addIsLoading(false))
      return response
    })
    .then((response) => response.json())
    .then((id) => {
      item.id = id
      dispatch(addItemDataSuccess(item))
    })
    .catch(() => {
      dispatch(addHasErrored(true))
      dispatch(addIsLoading(false))
    })
  }
}

export default addItemData
