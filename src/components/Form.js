import React from "react";
import "./Form.css";
import List from "./List.js";

export default class Form extends React.Component {
  state = {
    category: "",
    location: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      category: this.state.category,
      location: this.state.location,
    });
    this.setState({
      category: "",
      location: "",
    });
  };

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search">
          <div>Find:</div>
          <input
            placeholder="Food, Things to Do, Takeout, Thai"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />
          <div>Location:</div>
          <input
            placeholder="Zip Code, City, Address, Neighborhood, "
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Search</button>
        </div>
      </form>
    );
  }
}
