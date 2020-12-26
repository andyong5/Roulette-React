import React from "react";
import "./Form.css";
import List from "./List.js";

export default class Form extends React.Component {
  state = {
    find: "",
    location: "",
    search: false,
    loading: true,
    result: null,
  };

  componentDidMount() {
    const axios = require("axios");
    let API_KEY =
      "CQ7_Ak5L-ALov30-UtyE3aF15wak-9xYcSPFQv_0pAU0YvFqUXpRU2Qcy98rJ5GrNHJiEl6r0hgV6kbxfyLUBIUsVuDgmGQDC_bsomJN8t1GVdBbJHdRHNLve6vnX3Yx";
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSearch = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.find !== "" && this.state.location !== "") {
      this.setState({
        result: this.state,
        find: "",
        location: "",
        search: true,
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <div className="search">
          <div>Find:</div>
          <input
            placeholder="Food, Things to Do, Takeout, Thai"
            name="find"
            value={this.state.find}
            onChange={this.handleChange}
          />
          <div>Location:</div>
          <input
            placeholder="Zip Code, City, Address, Neighborhood, "
            value={this.state.location}
            name="location"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </div>

        {this.state.search ? <List search={this.state.result} /> : null}
      </form>
    );
  }
}
