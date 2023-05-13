import React, { Component } from "react";

export default class ReactEventEx extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        
          <h1>Simple Event ExAMPLE</h1>
          <label>
            Enter Company Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <h4>You Entered:{this.state.value}</h4>
        
      </div>
    );
  }
}
