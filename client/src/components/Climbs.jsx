import React, { Component } from 'react'
import AddClimb from './AddClimb'
import { withRouter } from 'react-router-dom'
import { getClimbs, postClimb, deleteClimb } from '../services/climbs';


class Climbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateId: null,
      climbs: [],
      show: false
    }
  }

  componentDidMount() {
    this.getClimb()
  }

  // getStateId = async () => {
  //   const response = await getState(this.props.match.params.id)
  //   this.setState({
  //     stateId: response
  //   })
  //   console.log(this.state.stateId.id)
  // }

  showModal = () => {
    this.setState({
      show: true
    })
  }
  hideModal = () => {
    this.setState({
      show: false
    })
  }

  getClimb = async () => {
    const response = await getClimbs(this.props.match.params.id)
    this.setState({
      climbs: response,
      stateId: this.props.match.params.id
    })
    console.log(this.state.climbs)
    console.log(this.state.stateId)

  }

  // addClimb = async (climbData) => {
  //   const response = await postClimb(climbData, this.props.match.params.id)
  //   this.setState({
  //     climbs: response
  //   })
  // }

  addClimb = async (climbData) => {
    const response = await postClimb(this.props.match.params.id, climbData)
    this.setState(prevState => ({
      climbs: [...prevState.climbs,response]
    }))

  }

  deleteClimb = async (climb_id) => {
    await deleteClimb(climb_id)
    this.setState( prevState => ({
      climbs: prevState.climbs.filter(climb => climb.id !== climb_id)
    }))
  }


  render() {

    // console.log(this.props.allStates)

    return (

      <div>
        <button onClick={this.showModal} >Add New Climb</button>
         <AddClimb

            show={this.state.show}
            id={this.state.stateId}
            hideModal={this.hideModal}
            handleAdd={this.addClimb}
          />
        
        {/* <h2>{this.props.match.params.name}</h2> */}
        {this.state.climbs && this.state.climbs.map(climbs => {
          return <div key={climbs.id}>
            <div>
              <div>{climbs.climb_name}</div>
              <div> {climbs.location} </div>
              <div>{climbs.type_of_climb}</div>
              <img src={climbs.img_url} alt={climbs.climb_name} width="250px" />
            </div>
            <button onClick={()=>this.deleteClimb(climbs.id)}>Delete</button>
          </div>

        })}

      </div>
    )
  }
}
export default withRouter(Climbs)