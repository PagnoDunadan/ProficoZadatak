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

const addItemData = (item, url, reset) => {
  return (dispatch) => {
    dispatch(addIsLoading(true))

    fetch(url, {
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

// fetch('http://192.168.1.10:3001/items', {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: this.state.name,
//     category: this.state.category,
//     status: this.state.status,
//     manufacturer: this.state.manufacturer,
//     location: this.state.location
//   })
// })
// .then(res => res.json())
// .then(id => {
//   this.props.addItem(
//     id,
//     this.state.name,
//     this.state.category,
//     this.state.status,
//     this.state.manufacturer,
//     this.state.location,
//   );
//   this.handleCancel();
// })