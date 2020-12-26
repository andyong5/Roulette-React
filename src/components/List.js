import React from "react";
import "./Form.css";
export default class Form extends React.Component {
  render() {
    let random = Math.random().toString(36).substring(6);
    return (
      <div>
        <li>{this.props.search.find}</li>
      </div>
    );
  }
}
