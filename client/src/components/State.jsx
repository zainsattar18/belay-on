import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getState } from '../services/states'

class State extends Component {
  constructor() {
    super()
    this.state = {
      stateId:[]
    }
  }
  componentDidMount() {
    return this.getState
  }

  getState = async () => {
    const response = await getState()
    this.setState({
      stateId:response 
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export default withRouter (State)