import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class AddClimb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      climb_name: '',
      img_url: '',
      type_of_climb: '',
      location: ''      
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { climb_name, img_url, location, type_of_climb } = this.state;
    const { id, show, hideModal, handleAdd, history } = this.props
    const showModalView = show ? 'modal display-block' : 'modal display-none'
    return (
      <div className="w-full max-w-xs">
      <div className={showModalView}>
        <section className='modal-main'>
          <button onClick={hideModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">X</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAdd(this.state);
            history.push(`/states/${id}/climbs`)
          }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h3 className="flex justify-center text-3xl text-blue-500 font-semibold">Add Climb</h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Climb Name:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Climb Name"
                  type="text"
                  name="climb_name"
                  value={climb_name}
                  onChange={this.handleChange}
                />
              </label>
              </div>
              
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Image:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Image"
                  type="text"
                  name="img_url"
                  value={img_url}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Type of Climb:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type of Climb"
                  type="text"
                  name="type_of_climb"
                  value={type_of_climb}
                  onChange={this.handleChange}
                />
              </label>
            </div>
              
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Location"
                  type="text"
                  name="location"
                  value={location}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={hideModal}>Submit</button>
          </form>
        </section>
        </div>
        </div>
    )
  }
}
export default withRouter (AddClimb)