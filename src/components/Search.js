import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Search.css'

const mapStateToProps = (state) => {
  return {
    searchString: state.searchString
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchString: (searchString) => {
      dispatch({
        type: 'SET_SEARCH_STRING',
        searchString
      })
    }
  }
}

class Search extends Component {
  render() {
    return (
      <div id="searchWrapper">
        <input id="searchBox" type="text" placeholder="Search"
        value={this.props.searchString}
        onChange={(e) => this.props.setSearchString(e.target.value)} />
        <i className="fa fa-search" aria-hidden="true" />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
