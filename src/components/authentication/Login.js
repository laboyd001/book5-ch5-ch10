import React, { Component } from "react";
import UserManager from "../../modules/UserManager";

export default class Login extends Component {
  // Set initial state
  state = {
    email: "",
    password: "",
    remember: false
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault();

    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
    let existingUser = {
      email: this.state.email,
      password: this.state.password
    };

    UserManager.getAll().then(result => {
      let userObject = result.find(item => {
        return (
          existingUser.email === item.email &&
          existingUser.password === item.password
        );
      });
      if (!userObject) {
        alert("Username or Email is incorrect");
      } else if (this.state.remember) {
        localStorage.setItem(
          "credentials",
          JSON.stringify({
            email: this.state.email,
            id: userObject.id
          })
        );
        window.location.href = "http://localhost:3000/";
      } else {
        sessionStorage.setItem(
          "credentials",
          JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            id: userObject.id
          })
        );
        window.location.href = "http://localhost:3000/";
      }
    });
  };

  registerUser = e => {
    e.preventDefault();

    let newUser = {
      email: this.state.email,
      password: this.state.password
    };

    UserManager.getAll().then(result => {
      let userEmail = result.find(item => {
        return newUser.email === item.email;
      });
      if (userEmail) {
        alert("email already exists");
      } else {
        UserManager.post(newUser).then(() => {
          alert("You're registered");
        });
      }
    });
  };

  changeRememberMe = () => {
    if (this.state.remember) {
      this.setState({ remember: false });
    } else {
      this.setState({ remember: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="login" onSubmit={this.handleLogin}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail">Email address</label>
          <input
            onChange={this.handleFieldChange}
            type="email"
            id="email"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword">Password</label>
          <input
            onChange={this.handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="rememberMe">Remember Me</label>
          <input
            type="checkbox"
            name="rememberMe"
            value="remember"
            onClick={this.changeRememberMe}
          />
          <button type="submit" onClick={e => this.registerUser(e)}>
            Register
          </button>
          <button type="submit" onClick={this.handleLogin}>
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}
