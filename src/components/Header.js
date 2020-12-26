import logo from "../logo.svg";
import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This will work
        </a>
        <h1>{this.props.title}</h1>
        <div>{this.props.num}</div>
      </header>
    );
  }
}
