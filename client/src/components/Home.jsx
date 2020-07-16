import React, { Component } from 'react'
import { getStates } from '../services/states'
import '../css/Home.css'
import States from './States'
import Climbs from './Climbs'
import Register from './Register'
import Login from './Login'
import Header from './shared/Header'
import { Route, withRouter } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allStates: [],
      show:false
    }
  }

  componentDidMount() {
    this.getState()
  }

  getState = async () => {
    const response = await getStates()
    this.setState({
      allStates: response
    })
    // console.log(this.state.allStates)
  }

  showModal = () => {
    this.setState({
      show:true
    })
  }

  hideModal = () => {
    this.setState({
      show:false
    })
  }


  render() {
    return (
      <div>
        <Header
          show={this.state.show}
          showModal={this.showModal}
          // hideModal = {this.hideModal}
        />
        <Route path='/login' render={(props)=>
          <Login
            {...props}
            show={this.state.show}
            handleLogin={this.props.handleLogin}
            hideModal = {this.hideModal}
        />}>
        </Route>
        <Route path='/register' render={(props) =>
          <Register
            {...props}
            show={this.state.show}
            handleRegister={this.props.handleRegister}
            hideModal = {this.hideModal}
          />}>
        </Route>

        <Route exact path='/states'>
          <States allStates={this.state.allStates} />
        </Route>

        <Route path='/states/:id/climbs' render={(props) => {
          const {id} = props.match.params 
          return <Climbs
            id={id}
            allStates={this.state.allStates}
          />
        }}>
        </Route>
      </div>
    )
  }
}
export default withRouter(Home)