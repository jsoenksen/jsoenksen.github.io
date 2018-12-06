import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import './styles.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //Sets initial state
    this.state = {
      search: "",
      type: "All",
      brand: "All"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //Sets the state of the "type" state variable depending on what is passed in
  onFilterType = (event) => {
    this.setState({
        type: event,
    });
  }

  //Sets the state of the "brand" state variables depending on what is passed in
  onFilterBrand = (event) => {
    this.setState({
        brand: event,
    });
  }

  //Takes into account the "type" and "brand" state variables when filtering out
  //items; because there are two state variables and two cases for each variable,
  //there are four total scenarios to take into account
  filterItem = (item) => {
    if (this.state.type === item.type && this.state.brand == item.brand) {
      return item.name.toLowerCase().search(this.state.search) !== -1;
      }
      else if (this.state.type === "All" && this.state.brand === item.brand) {
        return item.name.toLowerCase().search(this.state.search) !== -1;
      }
      else if (this.state.type === item.type && this.state.brand === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1;
      }
      else if (this.state.type === "All" && this.state.brand === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1;
      }
  }

  //Creates the label for the removable tag that appears after filtering by type
  typeTag = () => {
      if (this.state.type !== "All") {
          return (
              this.state.type + '   x'
          );
      }
  }

  //Resets the "type" state variable to "All" (called when removing a filter)
  typeReset = (event) => {
    this.setState({
        type: "All",
    });
  }

 //Creates the label for the removable tag that appears after filtering by brand
  brandTag = () => {
      if (this.state.brand !== "All") {
          return (
              this.state.brand + '   x'
          );
      }
  }

  //Resets the "brand" state variable to "All" (called when removing a filter)
  brandReset = (event) => {
    this.setState({
        brand: "All",
    });
  }

  render(){
    return (
        <div className = "filter-list">

          {/* Contains the two DropdownButtons, tags, and search bar */}
          <div className = "nav">
          <h1> Filter By </h1>

          {/* DropdownButton for Category */}
          <DropdownButton id="typeDropdown" title={"Category"} onSelect={this.onFilterType}>
            <MenuItem eventKey="All"> All </MenuItem>
            <MenuItem eventKey="Drawing"> Drawing </MenuItem>
            <MenuItem eventKey="Painting"> Painting </MenuItem>
          </DropdownButton>

          {/* DropdownButton for Brandy */}
          <DropdownButton id="brandDropdown" title={"Popular Brands"} onSelect={this.onFilterBrand}>
            <MenuItem eventKey="All"> All </MenuItem>
            <MenuItem eventKey="Prismacolor"> Prismacolor </MenuItem>
            <MenuItem eventKey="U.S. Art Supply"> U.S. Art Supply </MenuItem>
            <MenuItem eventKey="Strathmore"> Strathmore </MenuItem>
          </DropdownButton>

          {/* Buttons that seem to appear upon filtering */}
          <button className="tag" onClick={this.typeReset}><span> {this.typeTag()} </span></button>
          <button className="tag" onClick={this.brandReset}><span> {this.brandTag()} </span></button>

          {/* Search bar */}
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          </div>

          <div className = "itemsGrid">
            {/* Creates a new List based on the active filters */}
            <List items = {this.props.items.filter(this.filterItem)} />
          </div>
        </div>
    );
  }
}

export default FilteredList;
