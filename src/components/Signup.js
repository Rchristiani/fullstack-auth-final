import React, { Component } from "react";
import axios from 'axios';
import { setToken } from '../services/tokenService';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const res = await axios.post('/auth/signup', {email,password});
      setToken(res.data.token);
      this.props.setUser(res.data);
    } catch(e) {
      console.error(e);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            onChange={this.handleChange}
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="email">Password: </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="password"
            id="password"
            placeholder="Enter your desired password"
          />
        </div>
        <div>
          <input type="submit" value="Signup" />
        </div>
      </form>
    );
  }
}

export default Login;
