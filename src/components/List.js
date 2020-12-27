import React from "react";
import axios from "axios";
import "./Form.css";
export default class Form extends React.Component {
  state = {
    results: [],
    loading: true,
    errorStats: null,
  };

  componentDidMount() {
    console.log(this.props.location);
    this.getRestaurantsFromApi(this.props.locaiton);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.food !== prevProps.food ||
      this.props.category !== prevProps.category
    ) {
      this.setState(
        {
          results: [],
        },
        () => this.getRestaurantsFromApi(this.props.location)
      );
    }
  }

  getRestaurantsFromApi = (locationSearched) => {
    //UI feedback to tell the user when we are retrieving infromation from the API
    this.setState({ loading: true });

    //using a proxy server cors-anywhere to get rid of the CROS probblem
    //SUPER HOT TIP: passing the location variable, which equals to the user's input (see below). Instead of grabbbing the entire API, it will only retrieve the restaurants that are closed to the lcoation information we entered. This makes the lodading wayyyyyyy faster.
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`,
        {
          //required authorization format from API
          headers: {
            //to get the API from the .env file use process.env.{variable name}
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          //option params passed to API call to retrieve only breakfast and lunch spots
          params: {
            categories: "breakfast_brunch",
          },
        }
      )
      .then((res) => {
        console.log(res.data.businesses);
        //change the state of App to reflect on the result we are given from the API
        //at the same time, setting the loading state to false
        this.setState({ results: res.data.businesses, loading: false });
      })
      .catch((err) => {
        //fire the errorState message if there is no information return from the API
        this.setState({
          errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`,
          loading: false,
        });
      });
  };

  renderEmptyState() {
    return (
      <h2>
        `Hang tight! We are working on getting you the list of{" "}
        {this.props.category}`
      </h2>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({
      results: this.state.results,
    });
    this.setState({
      results: [],
    });
  };

  render() {
    if (this.state.loading) {
      return this.renderEmptyState();
    }

    return (
      <div>
        {this.state.results.map((restaurant, i) => (
          <div key={i}>
            <li>{restaurant.name}</li>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <button onClick={this.handleSubmit}>Start Game!</button>
        </form>
      </div>
    );
  }
}
