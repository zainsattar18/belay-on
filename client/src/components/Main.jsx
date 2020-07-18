import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Home from "../components/Home"
import { loginUser, registerUser, verifyUser, removeToken } from '../services/auth'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.handleVerify();
  }

  handleLogin = async (userData) => {
    const currentUser = await loginUser(userData)
    this.setState({
      currentUser: currentUser
    })
  }

  handleRegister = async (userData) => {
    const currentUser = await registerUser(userData)
    this.setState({
      currentUser: currentUser
    })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken()
    this.props.history.push('/')
  }

  handleVerify = async () => {
    const currentUser = await verifyUser()
    this.setState({
      currentUser: currentUser
    })
  }

  render() {
    return (
      <div>
        <Home
          currentUser={this.state.currentUser}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleLogout={this.handleLogout}
        />
      </div>
    )
  }
}

export default withRouter(Main)