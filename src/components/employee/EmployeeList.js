import React, {Component} from 'react'
import girl from "./EmployeeIcon.jpg"
import "./Animal.css"
import { Link } from "react-router-dom";

// this is the HTML representation of the employee list
// export default class EmployeeList extends Component {
//   render() {
//     return (
//       <section className="employees list">
//       <h2>Employee List</h2>
//         {this.props.employees.map(employee =>
//             <div key={employee.id}>
//                <li> {employee.name} </li>
//                <a href="#"
//                   onClick={() => this.props.deleteEmployee(employee.id)} alt="employee"
//                   >Delete</a>
//             </div>
//          )
//         }
//       </section>
//     )
//   }
// }

export default class EmployeeList extends Component {
    render() {
      return (
        <section className="employees list">
          {this.props.employees.map(employee =>
              <div key={employee.id} className="card">
                 <div className="card-body">
                  <h5 className="card-title">
                    <img src={girl} className="icon--employee" 
                    alt="employee" />
                    {employee.name}
                    <Link className="nav-link" 
                    to={`/employees/${employee.id}`}>Details</Link>
                    <a href="#"
                     onClick={() => this.props.deleteEmployee(employee.id)}
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


