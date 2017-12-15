import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchItemsData from '../actions/fetchItemsData';
import './ItemsList.css';

const mapStateToProps = (state) => {
  return {
    items: state.items.filter(
      item => item.name.toLowerCase().includes(
        state.searchString.trim().toLowerCase()
      )
    ),
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: (url) => dispatch(fetchItemsData(url)),
    deleteItem: (item) => {
      dispatch({
        type: 'DELETE_ITEM',
        id: item.id
      })
    }
  };
};

class ItemsList extends Component {
  componentDidMount() {
    this.props.fetchItems('http://192.168.1.10:3001/items')
  }
  deleteItemServer(item) {
    fetch('http://192.168.1.10:3001/items/' + item.id, {
      method: 'delete'
    })
    .then(res => {
      if (res.status === 200) {
        this.props.deleteItem(item);
      } else {
        console.log(res);
      }
    })
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (!this.props.hasErrored && !this.props.isLoading) {
      let listItems = this.props.items.map((item) =>
        <div key={item.id} className="itemCard">
          
          <i className="fa fa-times-circle-o cardRemoveIcon"
          onClick={() => this.deleteItemServer(item)} />

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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
