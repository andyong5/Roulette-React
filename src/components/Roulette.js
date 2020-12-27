import React from "react";
import Form from "./Form";
import List from "./List";

export default class TodoList extends React.Component {
  state = {
    category: "",
    location: "",
    userSearched: true,
    restaurants: [],
  };

  getSearch = (e) => {
    console.log(e);
    this.setState({
      category: e.category,
      location: e.location,
      userSearched: false,
    });
  };

  getRestaurants = (e) => {
    console.log(e);
    this.setState({
      restaurants: e.results,
    });
  };

  render() {
    if (this.state.userSearched) {
      return (
        <div>
          <p>Share this link with all other players:</p>
          <button id="cp_btn">Click Here to Copy Link</button>
          <Form onSubmit={this.getSearch} />
        </div>
      );
    }
    console.log(this.state);
    return (
      <div>
        <p>Share this link with all other players:</p>
        <button id="cp_btn">Click Here to Copy Link</button>
        <Form onSubmit={this.getSearch} />

        <div className="notCenter">
          <List
            onSubmit={this.getRestaurants}
            category={this.state.categor}
            location={this.state.location}
          />
        </div>
      </div>
    );
  }
}
