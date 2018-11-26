import React, { Component } from "react";
import "./Location.css";

 export default class LocationForm extends Component {
  // Set initial state
  state = {
    locationName: "",
    address: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewLocation = evt => {
    evt.preventDefault();
    if (this.state.address === "") {
      window.alert("Please enter an address");
    } else {
      const kennel = {
        name: this.state.locationName,
        address: this.state.address,
        };

      // Create the animal and redirect user to animal list
      this.props
        .addLocation(kennel)
        .then(() => this.props.history.push("/"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="locationForm newForm">
          <div className="form-group">
            <label htmlFor="locationName">Location name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="locationName"
              placeholder="Location name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="address"
              placeholder="Address"
            />
          </div>
         
          <button
            type="submit"
            onClick={this.constructNewLocation}
            className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}





 
