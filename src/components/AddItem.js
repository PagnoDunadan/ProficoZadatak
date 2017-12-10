import React, { Component } from 'react';
import './AddItem.css';

let counter = 0;

class AddItem extends Component {
  render() {
    return (
      <i id="addItemButton" className="fa fa-plus"
      aria-hidden="true"
      onClick={() => this.props.addItem(
          'Big screen TV ' + counter++,
          'Basic Inventory',
          'Broken',
          'LG',
          'Room 204'
      )}></i>
    );
  }
}
  
export default AddItem;
