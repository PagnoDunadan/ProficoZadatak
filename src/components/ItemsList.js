import React, { Component } from 'react';
import './ItemsList.css';

class ItemsList extends Component {
  render() {
    let listItems = this.props.items.map((item) =>
      <div key={item.id} className="itemCard">
        
        <img className="cardItemImage"
        src="https://i0.wp.com/orgulloso.es/wp-content/uploads/2017/04/santiago-bernabeu-589x393.jpg?resize=589%2C393"
        alt="ItemImage" />
        
        <div className="cardItemContent">
          <p className="cardItemName">
            <b>{item.name}</b>
          </p>
          
          <p className="cardItemStatus">
            <span className={item.status.toLowerCase()}>{item.status}</span>
          </p>

          <p className="cardItemLocation">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span> Room {item.location} </span>
          </p>
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
