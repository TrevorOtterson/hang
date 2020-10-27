import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
        <div className="wrapper">
        <div className="form-wrapper">
          <h1>Signup</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {/* First Name */}
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className=""
                placeholder="First Name"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            {/* Last Name */}
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className=""
                placeholder="Last Name"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            {/* Username */}
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className=""
                placeholder="Create Username"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className=""
                placeholder="Create Password"
                noValidate
                onChange={this.handleChange}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}