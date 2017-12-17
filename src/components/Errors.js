import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Errors.css'

const mapStateToProps = (state) => {
  return {
    fetchItemsIsLoading: state.fetchItemsIsLoading,
    fetchItemsHasErrored: state.fetchItemsHasErrored,
    addItemIsLoading: state.addItemIsLoading,
    addItemHasErrored: state.addItemHasErrored,
    deleteItemIsLoading: state.deleteItemIsLoading,
    deleteItemHasErrored: state.deleteItemHasErrored
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearFetchItemsError: () => dispatch({
      type: 'FETCH_ITEMS_HAS_ERRORED',
      hasErrored: false
    }),
    clearAddItemError: () => dispatch({
      type: 'ADD_ITEM_HAS_ERRORED',
      hasErrored: false
    }),
    clearDeleteItemError: () => dispatch({
      type: 'DELETE_ITEM_HAS_ERRORED',
      hasErrored: false
    })
  }
}

class Errors extends Component {
  render() {
    let i = 0;
    let errorMessages = [];

    if (this.props.fetchItemsHasErrored) {
      errorMessages.push(
        <p key={i++} className="errorMessage clearfix"
        onClick={() => this.props.clearFetchItemsError()}>
          Sorry! There was an error loading the items.
          <i className="fa fa-times closeIcon" aria-hidden="true" />
        </p>
      )
    }

    if (this.props.addItemHasErrored) {
      errorMessages.push(
        <p key={i++} className="errorMessage clearfix"
        onClick={() => this.props.clearAddItemError()}>
          Sorry! There was an error adding the item.
          <i className="fa fa-times closeIcon" aria-hidden="true" />
        </p>
      )
    }

    if (this.props.deleteItemHasErrored) {
      errorMessages.push(
        <p key={i++} className="errorMessage clearfix"
        onClick={() => this.props.clearDeleteItemError()}>
          Sorry! There was an error deleting the item.
          <i className="fa fa-times closeIcon" aria-hidden="true" />
        </p>
      )
    }
    return (
      <div id="errorsWrapper">
        {errorMessages}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors)
