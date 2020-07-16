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
      <div className={showModalView}>
        <section className='modal-main'>
          <button onClick={hideModal}>X</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAdd(this.state);
            history.push(`/states/${id}/climbs`)
          }}>
            <h3>Add Climb</h3>
            <div>
              <label>
                Climb Name:
        <input
                  type="text"
                  name="climb_name"
                  value={climb_name}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label>
                Image:
        <input
                  type="text"
                  name="img_url"
                  value={img_url}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            
            <br />
            
            <div>
              <label>
                Type of Climb:
        <input
                  type="text"
                  name="type_of_climb"
                  value={type_of_climb}
                  onChange={this.handleChange}
                />
              </label>
            </div>
              
            <div>
              <label>
                Location:
        <input
                  type="text"
                  name="location"
                  value={location}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />
            

            <button>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}
export default withRouter (AddClimb)