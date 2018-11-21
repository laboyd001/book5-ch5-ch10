import React, {Component} from 'react'
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"
import EmployeeCard from "./EmployeeCard"

export default class EmployeeList extends Component {
    render() {
      return (
        <React.Fragment> 
          <div className="employeeButton">
              <button type="button"
                      className="btn btn-success"
                      onClick={() => {
                          this.props.history.push("/employees/new")}
                      }>
                  Add Employee
              </button>
          </div>

          <section className="employees list">
            {this.props.employees.map(employee =>
              <div>
                <EmployeeCard key={employee.id} employee=
                  {employee} {...this.props} />
                      <br></br>

                    <h6 class="card-subtitle mb-2 text-muted">Caretaker For </h6>
                    <div className="animals--caretaker">
                      {
                        this.props.animals
                          .filter(anml => anml.employeeId === employee.id)
                          .map(anml=> <AnimalCard key={anml.id} animal={anml} {...this.props} />)
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


