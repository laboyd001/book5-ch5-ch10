import React, {Component} from 'react'
import dogHouse from "./KennelIcon.jpg"
import "./Location.css"
import { Link } from "react-router-dom"
import EmployeeCard from "../employee/EmployeeCard"

// this is an HTML representation of the location list
export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
         <div className="locationButton">
          <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                      this.props.history.push("/locations/new")}
                  }>
              Add Location
          </button>
      </div>

      <section className="locations list">
        {this.props.locations.map(kennel =>
        <div>
          <div key={kennel.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={dogHouse} className="icon--location" alt="kennel" />
                {kennel.name}
                <Link className="nav-link" to={`/locations/${kennel.id}`}>Details</Link>
                <a href="#"
                  onClick={() => this.props.deleteLocation(kennel.id)}
                  className="card-link">Delete</a>
              </h5> 
            </div>
          </div>

          <br></br>


          
            <h6 class="card-subtitle mb-2 text-muted">Employees</h6>
            <div className="locations--employees">
              {
                this.props.employees
                  .filter(emp => emp.locationId === kennel.id)
                  .map(emp=> <EmployeeCard key={emp.id} employee={emp} {...this.props} />)
              }
            </div>
          </div>
         )
        }
      </section>
      </React.Fragment>
    )
  }
}
      

