import React from "react";
import axios from "axios";
import "./Form.css";
export default class Form extends React.Component {
  state = {
    results: [],
    loading: true,
    errorStats: null,
  };

  async componentDidMount() {
    console.log(this.props.location);
    console.log(this.props.categories);
    this.setState({ loading: true });
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.props.location}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
      params: {
      categories: this.props.categories,
      limit: 5,
    }
    })
    .then((res) => {
    console.log(res.data)
    this.setState({loading: false, results: res.data})
    })
    .catch((err) => {
    console.log ('error')
    })

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

  renderEmptyState() {
    return (
      <h2>
        Hang tight! We are working on getting you the list of{" "}
        {this.props.category}.
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
