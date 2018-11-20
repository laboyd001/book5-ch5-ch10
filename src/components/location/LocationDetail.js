import React, { Component } from "react";
import "./Location.css";
import dogHouse from "./KennelIcon.jpg";

export default class LocationDetail extends Component {
  render() {
    /*
            Using the route parameter, find the location that the
            user clicked on by looking at the `this.props.locations`
            collection that was passed down from ApplicationViews
        */
    const kennel =
      this.props.locations.find(
        a => a.id === parseInt(this.props.match.params.locationId)
      ) || {};

    return (
      <section className="location list">
        <div key={kennel.id} className="card">
          <div className="card-body details">
            <h4 className="card-title">
              <img src={dogHouse} className="icon--location" alt="kennel" />
              {kennel.name}
            </h4>
            <h6 className="card-title">{kennel.address}</h6>
            <a
              href="#"
              onClick={() =>
                this.props
                  .deleteLocation(kennel.id)
                  .then(() => this.props.history.push("/locations"))
              }
              className="card-link"
            >
              Delete
            </a>
          </div>
        </div>
      </section>
    );
  }
}
