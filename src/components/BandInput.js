// Add BandInput component
import React, { Component } from "react";

import uuid from "uuid";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const band = { ...this.state, id: uuid() };
    // we send this.props.addBand to reducer
    this.props.addBand(band);
    // reset the input
    this.setState({
      name: ""
    });
  };
  render() {
    return (
      <div>
        <h3>Band Input</h3>
        <form
          onSubmit={event => this.handleOnSubmit(event)}
          className="form-horizontal"
        >
          <div>
            <label>Band Name</label>
            <div>
              <input onChange={this.handleOnChange} value={this.state.name} />
            </div>
          </div>

          <div>
            <input type="submit" />
          </div>
          {this.state.name}
        </form>
      </div>
    );
  }
}

export default BandInput;
