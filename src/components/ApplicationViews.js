// This is a Controller Component. Its only responsibility to to control the behavior of the system. It maps URLs to components.

import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import UserManager from '../modules/UserManager'
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import OwnerDetail from "./owner/OwnerDetail"
import LocationDetail from "./location/LocationDetail"
import AnimalForm from "./animal/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"
import LocationForm from "./location/LocationForm"
import Login from './authentication/Login'
import APIManager from '../modules/APIManager'
import AnimalEdit from './animal/AnimalEdit'


export default class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })

        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })

        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })

        UserManager.getAll().then(allUsers => {
            this.setState({
                users: allUsers
            })
        })


        .then (() => this.setState(newState))
    }

    // A Note About Component Method Definitions: If a method will be passed to a child component to execute, via props, you must use the syntax like deleteAnimal below, with a fat arrow. Otherwise,use the method shorthand you learned in JS Class syntax, without the fat arrow, like so:

    deleteLocation = id => {
        return fetch(`http://localhost:5002/locations/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/locations`))
        .then(e => e.json())
        .then(locations => this.setState({
            locations: locations
        })
      )
    }
    
    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        })
      )
    }

    deleteUser = id => {
        return fetch(`http://localhost:5002/users/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/users`))
        .then(e => e.json())
        .then(users => this.setState({
            users: users
        })
      )
    }
// Above 'componentDidMount' and 'delete' are methods on the class 'ApplicationViews'
    addAnimal = (animal) => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        })
      )

     addEmployee = (employee) => EmployeeManager.post(employee)
      .then(() => EmployeeManager.getAll())
      .then(employees => this.setState({
          employees: employees
      })
    )

    addOwner = (owner) => OwnerManager.post(owner)
      .then(() => OwnerManager.getAll())
      .then(owners => this.setState({
          owners: owners
      })
    )

    addLocation = (kennel) => LocationManager.post(kennel)
      .then(() => LocationManager.getAll())
      .then(locations => this.setState({
          locations: locations
      })
    )

    addUser = (user) => UserManager.post(user)
      .then(() => UserManager.getAll())
      .then(users => this.setState({
          users: users
      })
    )

    editAnimal = (id, animal) => AnimalManager.edit(id, animal)
        .then(animals => this.setState({
            animals: animals
        }))
    

    // You will notice the use of <React.Fragment />. That is simply a React wrapper around your old friend document.createDocumentFragment(). What this does is prevent unnecessary <div>, <article>, or <section> tags from being created.
    // ":animalId(\d+)"<---- this is a variable preceded by a colon(:)..(\d+) is a pattern match saying this needs to be a number, this is essentially a query.  react is also saving the id in that "animalId" variable

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                     if (this.isAuthenticated()){
                    return <LocationList {...props}
                    deleteLocation={this.deleteLocation}
                    employees={this.state.employees}
                    locations={this.state.locations} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                 <Route path="/locations/new" render={(props) => {
                     return <LocationForm {...props}
                     addLocation={this.addLocation}
                     locations={this.state.locations} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                     return <LocationDetail {...props} 
                     deleteLocation={this.deleteLocation} 
                     locations={this.state.locations} />
                }} />


                <Route exact path="/animals" render={(props) => {
                     if (this.isAuthenticated()){
                    return <AnimalList {...props} 
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route path="/animals/new" render={(props) => {
                     return <AnimalForm {...props}
                     addAnimal={this.addAnimal}
                     employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                     return <AnimalDetail {...props} 
                     deleteAnimal={this.deleteAnimal} 
                     animals={this.state.animals} />
                }} />
                <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                    return <AnimalEdit {...props}
                    animals={this.state.animals}
                    employees={this.state.employees}
                    editAnimal={this.editAnimal}/>
                }} />
                 
                

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()){
                        return <EmployeeList {...props}
                        deleteEmployee={this.deleteEmployee}
                        animals={this.state.animals} 
                        employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} /> 
                <Route path="/employees/new" render={(props) => {
                     return <EmployeeForm {...props}
                     addEmployee={this.addEmployee}
                     animals={this.state.animals} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                     return <EmployeeDetail {...props} 
                     deleteEmployee={this.deleteEmployee} 
                     employees={this.state.employees} />
                }} />


                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()){
                    return <OwnerList {...props}
                    deleteOwner={this.deleteOwner} 
                    owners={this.state.owners} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route path="/owners/new" render={(props) => {
                     return <OwnerForm {...props}
                     addOwner={this.addOwner}
                     animals={this.state.animals} />
                }} />
                 <Route path="/owners/:ownerId(\d+)" render={(props) => {
                     return <OwnerDetail {...props} 
                     deleteOwner={this.deleteOwner} 
                     owners={this.state.owners} />
                }} />   

            </React.Fragment>
        )
    }
     
}



