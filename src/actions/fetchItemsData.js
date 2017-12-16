import { API_URL } from '../config/config'

const fetchItemsIsLoading = (bool) => {
  return {
      type: 'FETCH_ITEMS_IS_LOADING',
      isLoading: bool
  }
}

const fetchItemsHasErrored = (bool) => {
  return {
      type: 'FETCH_ITEMS_HAS_ERRORED',
      hasErrored: bool
  }
}

const fetchItemsDataSuccess = (items) => {
  return {
    type: 'FETCH_ITEM_DATA_SUCCESS',
    items
  }
}

const fetchItemsData = () => {
  return (dispatch) => {
    dispatch(fetchItemsIsLoading(true))

    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(fetchItemsIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(fetchItemsDataSuccess(items)))
      .catch(() => {
        dispatch(fetchItemsHasErrored(true))
        dispatch(fetchItemsIsLoading(false))
      })
  }
}

export default fetchItemsData
