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
      <div className={showModalView}>
        <section className='modal-main'>
        <button onClick={hideModal}>X</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin(this.state);
            history.push('/states')
          }}>
            <h3>Login</h3>
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
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            <Link to='/register'>Register</Link>
            <button>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
