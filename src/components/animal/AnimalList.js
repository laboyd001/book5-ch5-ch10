import React, {Component} from 'react'
import "./Animal.css"
import AnimalCard from "./AnimalCard"

// this is the HTML representation of the animal list

export default class AnimalList extends Component {
  render () {
      return (
          <React.Fragment>
              <div className="animalButton">
                  <button type="button"
                          onClick={()=> this.props.history.push("/animals/new")}
                          className="btn btn-success">
                      Admit Animal
                  </button>
              </div>
              <section className="animals list">
              {
                  this.props.animals.map(animal =>
                      <AnimalCard key={animal.id} animal={animal} {...this.props} />
                  )
              }
              </section>
          </React.Fragment>
      )
  }
}


