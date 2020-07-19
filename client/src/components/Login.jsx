import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { show, hideModal, handleLogin, history } = this.props;
    const showModalView = show ? 'modal display-block' : 'modal display-none'
    return (
      <div className="w-full max-w-xs">
        <div className={showModalView} >
          <section className='modal-main'>
            <button onClick={hideModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1" type="button">X</button>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin(this.state);
              history.push('/states')
            }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className>Login</h3>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username:
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="******************"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <Link to='/register'>
                  <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Register</button>
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>
                </div>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
