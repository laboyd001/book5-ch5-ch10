import React, {Component} from 'react'

// this is an HTML representation of the location list
export default class LocationList extends Component {
  render() {
    return (
      <section className="locations list">
      <h2>Location List</h2>
        {this.props.locations.map(location =>
            <div key={location.id}>
               <p> Name: {location.name}</p>
               <p> Address: {location.address} </p>
                <br></br>
            </div>
         )
        }
      </section>
    )
  }
}

