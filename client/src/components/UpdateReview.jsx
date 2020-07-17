import React, { Component } from 'react'

export default class UpdateReview extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      rating: '',
      img_url: ''
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
    const { id, stateId, update, hideModal, handleUpdate, history } = this.props
    const showModalView = update ? 'modal display-block' : 'modal display-none'
    return (
      <div>
         <div className={showModalView}>
        <section className='modal-main'>
          <button onClick={hideModal}>X</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(this.state);
            // history.push(`/states/${id}/climbs/${id}/reviews`)
          }}>
            <h3>Update Review</h3>
            <div>
              <label>
                Review
        <input
                  type="text"
                  name="review"
                  value={review}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br />

            <div>
              <label>
                Rating:
        <input
                  type="text"
                  name="rating"
                  value={rating}
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
            

            <button>Submit</button>
          </form>
        </section>
      </div>
        
      </div>
    )
  }
}
