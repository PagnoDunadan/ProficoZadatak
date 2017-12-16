import { API_URL } from '../config/config'

const deleteItemIsLoading = (bool) => {
  return {
    type: 'DELETE_ITEM_IS_LOADING',
    isLoading: bool
  }
}

const deleteItemHasErrored = (bool) => {
  return {
    type: 'DELETE_ITEM_HAS_ERRORED',
    hasErrored: bool
  }
}

const deleteItemDataSuccess = (item) => {
  return {
    type: 'DELETE_ITEM_DATA_SUCCESS',
    item
  }
}

const deleteItemData = (item) => {
  return (dispatch) => {
    dispatch(deleteItemIsLoading(true))

    fetch(API_URL + item.id, {
      method: 'delete'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(deleteItemIsLoading(false))
        dispatch(deleteItemDataSuccess(item))
      })
      .catch(() => {
        dispatch(deleteItemHasErrored(true))
        dispatch(deleteItemIsLoading(false))
      })
  }
}

export default deleteItemData
