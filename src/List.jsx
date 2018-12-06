import React, {Component} from 'react';
import ItemBox from './ItemBox';
import './styles.css';

class List extends Component {
     constructor(props) {
        super(props);
        //state variable to signal when user wants to sort
        this.state = {
            sort: "unsorted"
        };
    }

  renderList() {
    const items = this.props.items.map(item => {
      return <li key={item.name}> <ItemBox image={item.image} name={item.name} price={item.price} rating={item.rating} details={item.details} brand={item.brand} type={item.type}/>  </li>
    });
    return items;
  }

  //sorts items in list by price from low to high
  sortLowToHigh = () => {
      this.props.items.sort(function(a,b) {return a.price - b.price});
      this.setState ({
          sort: "lowToHigh",
      });
  }

//sorts items in list by price from high to low
  sortHighToLow = () => {
      this.props.items.sort(function(a,b) {return b.price - a.price});
      this.setState ({
          sort: "highToLow"
      });
  }


  render() {
    return (
      <div className = "list">
        <div className = "nav" id = "nav2">
            <h1> Sort by Price </h1>
            {/* Buttons to sort and re-render list appropriately */}
            <button className="LowToHigh" onClick={this.sortLowToHigh}> Low to High </button>
            <button className="HighToLow" onClick={this.sortHighToLow}> High to Low </button>
        </div>
        <ul>
            {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default List;
