import React, { Component } from 'react'
import AddClimb from './AddClimb'
import { withRouter, Link } from 'react-router-dom'
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
    // console.log(this.state.climbs)
    // console.log(this.state.stateId)

  }



  addClimb = async (climbData) => {
    const response = await postClimb(this.props.match.params.id, climbData)
    this.setState(prevState => ({
      climbs: [...prevState.climbs, response]
    }))
  }

  deleteClimb = async (climb_id) => {
    await deleteClimb(climb_id)
    this.setState(prevState => ({
      climbs: prevState.climbs.filter(climb => climb.id !== climb_id)
    }))
  }


  render() {

    // console.log(this.props.allStates)

    return (

      <div>
        <div className="bg-indigo-900 text-center py-8 lg:px-4">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-2 m-4" onClick={this.showModal}>Add New Climb</button>
          <AddClimb
            show={this.state.show}
            id={this.state.stateId}
            hideModal={this.hideModal}
            handleAdd={this.addClimb}
          />
        </div>
        {/* <h2>{this.props.match.params.name}</h2> */}
        <div className="flex flex-wrap justify-evenly m-7">
          {this.state.climbs && this.state.climbs.map(climbs => {
            return <div key={climbs.id}>
              <div className="p-4 m-2 rounded-lg border-4 hover:border-teal-300 ">
                <div className="max-w-sm p-2 rounded-md overflow-hidden shadow-lg border border-color-blue-200 ">
                  <img className="w-full p-1 rounded-md border border-color-blue-500" src={climbs.img_url} alt={climbs.climb_name} width="250px" />
                  <div className="font-bold text-2xl mb-2 text-center">{climbs.climb_name}</div>
                  <div className="font-bold text-xl mb-2 text-center"> {climbs.location} </div>
                  <div className="font-bold text-l mb-2 text-center">{climbs.type_of_climb}</div>

                </div>
                <div className="flex items-center justify-evenly m-2 pt-1">
                  <Link to={`/states/${this.state.stateId}/climbs/${climbs.id}/reviews`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Read Reviews</button>
                  </Link>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => this.deleteClimb(climbs.id)}>Delete</button>
                </div>
              </div>
            </div>

          })}
        </div>
      </div>
    )
  }
}
export default withRouter(Climbs)