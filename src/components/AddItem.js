import React, { Component } from 'react';
import './AddItem.css';

let counter = 0;

class AddItem extends Component {
  render() {
    return (
      <button id="addItemButton"
      onClick={() => this.props.addItem(
          'Big screen TV ' + counter++,
          'Basic Inventory',
          'Broken',
          'LG',
          'Room 204'
      )}> + </button>
    );
  }
}
  
export default AddItem;
