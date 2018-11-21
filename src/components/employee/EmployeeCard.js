import React, { Component } from "react"
import { Link } from "react-router-dom"
import girl from "./EmployeeIcon.jpg"
import "./Employee.css"

// Right now, the only place that you're rendering the basic animal card is in the AnimalList component. What you're going to do is refactor your application so that you can view the animal card in two places, using the same component.

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={girl} className="icon--employee" />
                        {this.props.employee.name}
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}