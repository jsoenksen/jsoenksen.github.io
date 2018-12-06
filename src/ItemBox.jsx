import React, { Component } from 'react';
import './styles.css';

class ItemBox extends Component {

  render() {
    return (
    <div className = "itemTile">
        <img src={this.props.image} alt=""/>
        <div className = "itemDes">
        <h2> {this.props.name} </h2>
        <h3> <strong>Price:</strong> ${this.props.price} </h3>
        <h3 className = "rating"> <strong>Rating:</strong> {this.props.rating} </h3>
        <p>  {this.props.details} </p>
        <h4> <strong>Brand:</strong> {this.props.brand} </h4>
        <h4> <strong>Category:</strong> {this.props.type} </h4>
        </div>
    </div>
    );
  }
}

export default ItemBox
