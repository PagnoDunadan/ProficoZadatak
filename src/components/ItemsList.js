import React, { Component } from 'react';
import './ItemsList.css';

class ItemsList extends Component {
  render() {
    let listItems = this.props.items.map((item) =>
      <div key={item.id} className="itemCard">
        <img className="itemImage"
        src="https://i0.wp.com/orgulloso.es/wp-content/uploads/2017/04/santiago-bernabeu-589x393.jpg?resize=589%2C393"
        alt="Avatar" />
        <div className="itemContainer">
          <h4><b>{item.name}</b></h4>
        </div>
      </div>
    );
    return (
      <div id="itemsWrapper" className="clearfix">
        {listItems}
      </div>
    );
  }
}

export default ItemsList;
