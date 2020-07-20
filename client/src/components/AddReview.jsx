import React, { Component } from 'react'
import { withRouter } from 'react-router'

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      rating: '',
      img_url: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { review, rating, img_url } = this.state
    const { show, hideModal, handleAdd, } = this.props
    const showModalView = show ? 'modal display-block' : 'modal display-none'
    // console.log(stateId)
    return (
      <div className="w-full max-w-xs z-50">
      <div className={showModalView}>
        <section className='modal-main'>
          <button onClick={hideModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">X</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAdd(this.state);
            // history.push(`/states/${id}/climbs/${id}/reviews`)               
          }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-20">
            <h3 className="flex justify-center text-3xl text-blue-500 font-semibold">Add Review</h3>
            

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Rating:
        <input  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rating"
                    type="number"
                    min="0"
                    max="5"
                  name="rating"
                  value={rating}
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
                Review
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20" placeholder="Review"
                    type="text"
                    
                  name="review"
                  value={review}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={hideModal}>Submit</button>
          </form>
        </section>
        </div>
        </div>
    )
  }
}
export default withRouter(AddReview)