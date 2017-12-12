import React, { Component } from 'react';
import './Inventory.css';
import Search from './Search.js';
import ItemsList from './ItemsList.js';
import AddItem from './AddItem.js';

class Inventory extends Component {
  render() {
    return (
      <div id="inventoryWrapper" className="clearfix">
        <Search />

        <ItemsList />
        
        <AddItem />
      </div>
    );
  }
}

export default Inventory;
