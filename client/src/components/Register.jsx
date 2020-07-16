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
      <div className={showModalView}>
        <section className='modal-main'>
          <Link to='/home'>
          <button onClick={hideModal}>X</button>
          </Link>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleRegister(this.state);
            history.push('/states');
          }}>
            <div>
              <h2>Register</h2>
              <label>
                Email:
           <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Username:
          <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Password:
          <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
