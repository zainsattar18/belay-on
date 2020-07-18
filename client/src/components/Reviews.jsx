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
      update:''
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

  updateModal = (id) => {
    this.setState({
      update:id
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
    // console.log(climb_id)
    console.log(this.state.reviews)
  }
  addReview = async (reviewData) => { 
    const response = await postReview(this.props.match.params.id, reviewData)
    this.setState(prevState => ({
      reviews: [...prevState.reviews, response]
    }))
  }

  // updateReview = async (reviewData) => {
  //   const response = await putReview(this.props.match.params.id, reviewData)
  //   // id = this.state.reviews 
  //   // const response = await putReview(id, reviewData)
  //   //this.state.reviews.id
  //   this.setState(prevState => ({
  //     reviews:prevState.reviews.map(review => review.id === parseInt(this.state.climbId) ? response : review)
  //   }))
  // }

  updateReview = async (id, reviewData) => {
      const response = await putReview(id, reviewData)
      this.setState(prevState => ({
        reviews:prevState.reviews.map(review => review.id === parseInt(id) ? response : review)
      }))
    }

  deleteClimb = async (review_id) => {
    await deleteReview(review_id)
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== review_id)
    }))
  }


  render() {
    console.log(this.state.reviews)
    
    const {info} = this.props.match.params
    const reviewItem = this.state.reviews.find(review => review.id === parseInt(info))
    console.log(this.props.match.params)
    
    return (
      <div>
        <div>
          <button onClick={this.showModal}>Add Review</button>
          <AddReview
            id={this.state.reviews.id}
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
            <button onClick={() => this.updateModal(review.id)}>Update Review</button>
            <UpdateReview
              
              id={review.id}
              // id={info}
              update={this.state.update}
              hideModal={this.hideUpdateModal}
              handleUpdate={this.updateReview}
              reviewItem={reviewItem}
              info={info}
            />
            <button onClick={()=> this.deleteClimb(review.id)}> Delete Review</button>
          </div>
            
        })}
       
      </div>
    )
  }
}
export default withRouter (Reviews)