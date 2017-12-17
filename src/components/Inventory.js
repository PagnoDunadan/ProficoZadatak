import React, { Component } from 'react'
import './Inventory.css'
import Search from './Search'
import ItemsList from './ItemsList'
import AddItem from './AddItem'

class Inventory extends Component {
  render() {
    return (
      <div id="inventoryWrapper" className="clearfix">
        <Search />

        <ItemsList />
        
        <AddItem />
      </div>
    )
  }
}

export default Inventory
