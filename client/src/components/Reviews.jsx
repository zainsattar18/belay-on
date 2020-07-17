import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getReviews, postReview, deleteReview, putReview } from '../services/reviews'
import BeautyStars from 'beauty-stars'
import AddReview from '../components/AddReview'
import UpdateReview from '../components/UpdateReview'

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      climbId: null,
      show: false,
      update:false
    }
}

  
  componentDidMount() {
    this.getReview()
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

  updateModal = () => {
    this.setState({
      update:true
    })
  }

  hideUpdateModal = () => {
    this.setState({
      update:false 
    })
  }
  
  
  getReview = async (climb_id) => {
    // state_id = this.props.id 
    climb_id = this.props.match.params.id  
    const response = await getReviews(climb_id)
    this.setState({
      reviews: response,
      climbId:climb_id
    })
    console.log(climb_id)
    console.log(this.state.reviews)
  }
  addReview = async (reviewData) => { 
    const response = await postReview(this.props.match.params.id, reviewData)
    this.setState(prevState => ({
      reviews: [...prevState.reviews, response]
    }))
  }

  updateReview = async (reviewData) => {
    const response = await putReview(this.props.match.params.id, reviewData)
    this.setState(prevState => ({
      reviews:prevState.reviews.map(updated => updated.id === parseInt(this.state.climbId) ? response : updated)
    }))
  }

  deleteClimb = async (review_id) => {
    await deleteReview(review_id)
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== review_id)
    }))
  }


  render() {
    // console.log(this.props.allStates)
    
    return (
      <div>
        <div>
          <button onClick={this.showModal}>Add Review</button>
          <AddReview
            id={this.state.climbId}
            show={this.state.show}
            hideModal={this.hideModal}
            handleAdd={this.addReview}
          />
        </div>
        {this.state.reviews && this.state.reviews.map(review => {
          return <div key={review.id}>
            <img src={review.img_url} alt={review.review} width="250"/>
            <div>{review.review} </div>
            <div>{review.rating}</div>
            {/* <BeautyStars value={review.rating} size="25px"/> */}
            <button onClick={this.updateModal}>Update Review</button>
            <UpdateReview
              id={this.state.climbId}
              update={this.state.update}
              hideModal={this.hideUpdateModal}
              handleUpdate = {this.updateReview}
            />
            <button onClick={()=> this.deleteClimb(review.id)}> Delete Review</button>
          </div>
            
        })}
       
      </div>
    )
  }
}
export default withRouter (Reviews)