import React, {Component} from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"
import { Link } from "react-router-dom";

// this is the HTML representation of the animal list
export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals list">
        {this.props.animals.map(animal =>
          <div key={animal.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={dog} className="icon--dog" alt="dog" />
                {animal.name}
                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                <a href="#"
                  onClick={() => this.props.deleteAnimal(animal.id)}
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

