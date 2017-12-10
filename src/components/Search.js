import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = { searchString: '' };
  }
  updateSearchString(e) {
    this.setState({ searchString: e.target.value });
    this.props.setSearchString(e.target.value);
  }
  render() {
    return (
      <div id="searchWrapper">
        <input id="searchBox" type="text" placeholder="Search"
        value={this.state.searchString}
        onChange={(e) => this.updateSearchString(e)} />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Search;
