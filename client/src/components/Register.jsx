import React, { Component } from 'react'

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
            <button onClick={hideModal}>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
