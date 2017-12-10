import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: '',
      status: '',
      manufacturer: '',
      location: '',
      showModal: false,
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleCancel() {
    this.setState({
      name: '',
      category: '',
      status: '',
      manufacturer: '',
      location: '',
      showModal: false
    })
  }
  handleSubmit(e) {
    e.preventDefault();

    let missing = '';
    
    if (this.state.name === '') missing += ' Name ';
    if (this.state.category === '') missing += ' Category ';
    if (this.state.status === '') missing += ' Status ';
    if (this.state.manufacturer === '') missing += ' Manufacturer ';
    if (this.state.location === '') missing += ' Location ';

    if (missing !== '') {
      alert("Missing required fields: " + missing);
      return;
    }

    this.props.addItem(
      this.state.name,
      this.state.category,
      this.state.status,
      this.state.manufacturer,
      this.state.location,
    );
    this.handleCancel();
  }
  render() {
    return (
      // <i id="addItemButton" className="fa fa-plus"
      // aria-hidden="true"
      // onClick={() => this.props.addItem(
      //     'Big screen TV',
      //     'Basic Inventory',
      //     'Broken',
      //     'LG',
      //     'Room 204'
      // )}></i>
      <div>
        <i id="addItemButton" className="fa fa-plus"
        aria-hidden="true"
        onClick={() => this.setState({
          showModal: true
        })} />

        <div className={this.state.showModal ?
          'addItemModal' : 'displayNone'}>
          <h1>Add Item</h1>
          <br />
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="Name"
              name="name" value={this.state.name}
              onChange={(e) => this.handleChange(e)} />
            <br />

            <input type="text" placeholder="Category"
              name="category" value={this.state.category}
              onChange={(e) => this.handleChange(e)} />
            <br />

            <input type="text" placeholder="Status"
              name="status" value={this.state.status}
              onChange={(e) => this.handleChange(e)} />
            <br />

            <input type="text" placeholder="Manufacturer"
              name="manufacturer" value={this.state.manufacturer}
              onChange={(e) => this.handleChange(e)} />
            <br />

            <input type="text" placeholder="Location"
              name="location" value={this.state.location}
              onChange={(e) => this.handleChange(e)} />
            <br />

            <br />

            <input type="button" value="Cancel"
            onClick={() => this.handleCancel()} />
            
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className={this.state.showModal ?
        'addItemModalBackdrop' : 'displayNone'}
        onClick={() => this.handleCancel()} />
      </div>
    );
  }
}
  
export default AddItem;
