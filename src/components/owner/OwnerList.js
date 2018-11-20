import React, {Component} from 'react'
import heart from "./OwnerIcon.png"
import "./Owner.css"
import { Link } from "react-router-dom";

// This component will return an HTML representation of the owner list
export default class OwnerList extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="ownerButton">
          <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                      this.props.history.push("/owners/new")}
                  }>
              Add Owner
          </button>
      </div>

      <section className="owners list">
        {this.props.owners.map(owner =>
          <div key={owner.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={heart} className="icon--owner" alt="heart" />
                {owner.name}
                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                <a href="#"
                  onClick={() => this.props.deleteOwner(owner.id)}
                  className="card-link">Delete</a>
              </h5> 
            </div>
          </div>
         )
        }
      </section>
      </React.Fragment>
    )
  }
}
       

