import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


class UpdateReview extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      rating: '',
      img_url: ''
    }
  }

  componentDidMount() {
    if (this.props.reviewItem) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviewItem !== this.props.reviewItem) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      review: this.props.reviewItem.review,
      rating: this.props.reviewItem.rating,
      img_url: this.props.reviewItem.img_url
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    // console.log(this.props.id)

    const { review, rating, img_url } = this.state
    const { id, info, update, hideModal, handleUpdate, history } = this.props
    const showModalView = update == id ? 'modal display-block' : 'modal display-none'

    return (
      <div>
        <div className={showModalView}>
          <section className='modal-main'>
            <button onClick={hideModal}>X</button>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(id, this.state);
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


              <button onClick={hideModal}>Submit</button>
            </form>
          </section>
        </div>

      </div>
    )
  }
}

export default withRouter (UpdateReview)