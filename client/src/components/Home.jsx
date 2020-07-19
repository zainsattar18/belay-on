import React, { Component } from 'react'
import { getStates } from '../services/states'
import '../css/Home.css'
import '../css/Styles.css'
import States from './States'
import Climbs from './Climbs'
import Reviews from './Reviews'
import Register from './Register'
import Show from './shared/Show'
import Login from './Login'
import Header from './shared/Header'
import { Route, withRouter } from 'react-router-dom'
import LowerNav from './shared/LowerNav'
import Footer from './shared/Footer'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allStates: [],
      stateId:[],
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
          currentUser={this.props.currentUser}
          handleLogout ={this.props.handleLogout}
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

        <Route exact path='/'>
        <Show />
        </Route>

        <Route exact path='/states'>
          <States allStates={this.state.allStates} />
        </Route>

        <Route exact path='/states/:id/climbs' render={(props) => {
          const {id} = props.match.params 
          return <Climbs
            id={id}
            allStates={this.state.allStates}
          />
        }}>
        </Route>

        <Route exact path="/states/:id/climbs/:id/reviews" render={(props) => { 
          const {id} = props.match.params
         return <Reviews
           id={id}
           allStates={this.state.allStates}
           currentUser={this.props.currentUser}
          />
        }}>
        </Route>

        <Route path='/'>
        <LowerNav/>
        </Route>

        <Route path='/'>
          <Footer />
        </Route>
      </div>
    )
  }
}
export default withRouter(Home)