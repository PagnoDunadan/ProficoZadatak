const deleteHasErrored = (bool) => {
  return {
    type: 'DELETE_HAS_ERRORED',
    hasErrored: bool
  }
}

const deleteIsLoading = (bool) => {
  return {
    type: 'DELETE_IS_LOADING',
    isLoading: bool
  }
}

const deleteItemDataSuccess = (item) => {
  return {
    type: 'DELETE_ITEM_DATA_SUCCESS',
    item
  }
}

const deleteItemData = (item, url) => {
  return (dispatch) => {
    dispatch(deleteIsLoading(true))

    fetch(url + '/' + item.id, {
      method: 'delete'
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(deleteIsLoading(false))
        dispatch(deleteItemDataSuccess(item))
      })
      .catch(() => {
        dispatch(deleteHasErrored(true))
        dispatch(deleteIsLoading(false))
      })
  }
}

export default deleteItemData
