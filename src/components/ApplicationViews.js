// This is a Controller Component. Its only responsibility to to control the behavior of the system. It maps URLs to components.

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import AnimalDetail from "./animal/AnimalDetail"

export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        // fetch("http://localhost:5002/locations")
        // .then(r => r.json())
        // .then(locations => newState.locations = locations)

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

        .then (() => this.setState(newState))
    }

    // A Note About Component Method Definitions: If a method will be passed to a child component to execute, via props, you must use the syntax like deleteAnimal below, with a fat arrow. Otherwise,use the method shorthand you learned in JS Class syntax, without the fat arrow, like so:

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
// Above 'componentDidMount' and 'delete' are methods on the class 'ApplicationViews'


    // You will notice the use of <React.Fragment />. That is simply a React wrapper around your old friend document.createDocumentFragment(). What this does is prevent unnecessary <div>, <article>, or <section> tags from being created.

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList 
                    animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                     return <AnimalDetail {...props} 
                     deleteAnimal={this.deleteAnimal} 
                     animals={this.state.animals} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList 
                    deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} /> 

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList 
                    deleteOwner={this.deleteOwner} 
                    owners={this.state.owners} />
                }} />   

            </React.Fragment>
        )
    }
}



