import React, { Component } from 'react';
import './Inventory.css';
import store from '../redux/Redux.js';
import Search from './Search.js';
import ItemsList from './ItemsList.js';
import AddItem from './AddItem.js';

let nextItemId = 0;

const setSearchString = (searchString) => {
  store.dispatch({
    type: 'SET_SEARCH_STRING',
    searchString
  });
};

// const setVisibilityFilter = (filter) => {
//   store.dispatch({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   });
// };

const addItem = (name, category, status, manufacturer, location) => {
  store.dispatch({
    type: 'ADD_ITEM',
    id: nextItemId++,
    name,
    category,
    status,
    manufacturer,
    location
  });
};

class Inventory extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  render() {
    store.subscribe(() => {
      this.setState({
        items: store.getState().items.filter(
          item => item.name.toLowerCase().includes(
            store.getState().searchString.toLowerCase()
          )
        )
      });
    });
    return (
      <div id="contentWrapper" className="clearfix">
        <Search setSearchString={setSearchString} />

        <ItemsList items={this.state.items} />
        
        <AddItem addItem={addItem} />
      </div>
    );
  }
}

export default Inventory;
