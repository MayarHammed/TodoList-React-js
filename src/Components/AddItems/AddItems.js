import React, { Component } from "react";
import "./AddItems.css";
import Fade from "react-reveal/Fade";


export class AddItems extends Component {
  state = {
    name: "",
    age: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelsubmit = (e) => {
    e.preventDefault();
    this.props.AddItemsList(this.state);
  };

  render() {
    return (
      <div className="AddItems">
        <Fade left big>
          <form onSubmit={this.handelsubmit}>
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Enter name"
              onChange={this.handelChange}
              required
            />
            <input
              className="input"
              type="number"
              id="age"
              placeholder="Enter age"
              onChange={this.handelChange}
              required
            />
            <input className="submit" type="submit" value="AaddItem" />
          </form>
        </Fade>
      </div>
    );
  }
}
