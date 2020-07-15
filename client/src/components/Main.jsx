import React, { Component } from 'react'
import { getStates } from '../services/states'

import States from './States'
import State from './State'
import { Route } from 'react-router'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      allStates: []
    }
  }

  // async componentDidMount() {
  //   const response = await getStates()
  //   this.setState({
  //     allStates: response
  //   })
  //   console.log(this.state.allStates)
  // }

  componentDidMount() {
    this.getState()
  }

  getState = async () => {
    const response = await getStates()
    this.setState({
      allStates:response
    })
  }


  render() {
    return (
      <div>

        <Route exact path = '/states'>
          <States allStates={this.state.allStates} />
        </Route>

        <Route exact path='states/:id/climbs'>
          <State />
        </Route>
      </div>
    )
  }
}
export default Main
