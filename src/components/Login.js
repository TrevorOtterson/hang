import React, { Component } from "react";
import '../App.css'

export default class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {/* Username */}
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className=""
                placeholder="Username"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className=""
                placeholder="Password"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            <div className='loginAccount'>
                <button type='submit'>Login</button>
                <br/>
                <small>Sign Up</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
