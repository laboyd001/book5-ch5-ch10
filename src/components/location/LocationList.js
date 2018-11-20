import React, {Component} from 'react'
import kennel from "./KennelIcon.jpg"
import "./Location.css"
import { Link } from "react-router-dom";

// this is an HTML representation of the location list
export default class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
        {this.props.locations.map(location =>
          <div key={location.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={kennel} className="icon--location" alt="kennel" />
                {location.name}
                <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                <a href="#"
                  onClick={() => this.props.deleteLocation(location.id)}
                  className="card-link">Delete</a>
              </h5> 
            </div>
          </div>
         )
        }
      </section>
    )
  }
}
      

