import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { email, username, password } = this.state;
    const { show, hideModal, handleRegister, history } = this.props;

    const showModalView = show ? 'modal display-block' : 'modal display-none'

    return (
      <div className="w-full max-w-xs">
        <div className={showModalView}>
          <section className='modal-main'>
            <Link to='/'>
              <button onClick={hideModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">X</button>
            </Link>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleRegister(this.state);
              history.push('/');
            }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div>
                <h2 className="flex justify-center text-3xl text-blue-500 font-semibold">Register:</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
           <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username:
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="flex items-center justify-between">
              <label>
                  Password:
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************"
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
          </section>
        </div>
      </div>
    )
  }
}
