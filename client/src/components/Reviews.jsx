import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getReviews, postReview, deleteReview, putReview } from '../services/reviews'
import StarRatings from 'react-star-ratings'
import AddReview from '../components/AddReview'
import UpdateReview from '../components/UpdateReview'


class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      climbId: null,
      show: false,
      update: ''
    }
  }


  componentDidMount() {
    this.getReview()
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

  updateModal = (id) => {
    this.setState({
      update: id
    })
  }

  hideUpdateModal = () => {
    this.setState({
      update: false
    })
  }

  


  getReview = async (climb_id) => {
    // state_id = this.props.id 
    climb_id = this.props.match.params.id
    const response = await getReviews(climb_id)
    this.setState({
      reviews: response,
      climbId: climb_id
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
      reviews: prevState.reviews.map(review => review.id === parseInt(id) ? response : review)
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
    const { info } = this.props.match.params
    const reviewItem = this.state.reviews.find(review => review.id === parseInt(info))
    // const reviewedItem = this.state.reviews && this.state.reviews.map(data => {
    //     return data.climb.location
    //   })
    // console.log(reviewedItem)

    return (


      <div>
        <div className="bg-indigo-900 text-center py-8 lg:px-4">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-2 m-4" onClick={this.showModal}>Add Review</button>
          <AddReview
            id={this.state.reviews.id}
            show={this.state.show}
            hideModal={this.hideModal}
            handleAdd={this.addReview}
          />
        </div>

        <div className="mx-auto px-4 py-8 max-w-xl my-10 z-0">
          {this.state.reviews && this.state.reviews.map(review => {
            return <div key={review.id} >
              <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide p-3 border-4 hover:border-indigo-600 m-2">
                <div className="md:flex-shrink-0">
                  <img src={review.img_url} alt={review.review} className="w-full h-64 rounded-lg rounded-b-none" />
                </div>
                <div className="px-4 py-2">
                  <div className="">
                    <div className="flex justify-between pt-2">
                        <img className="w-10 h-10 rounded-full mr-4" src={review.climb && review.climb.img_url} alt="climb-on"/>          
                      <div className="text-lg text-gray-700 text-center pt-2 pr-4">
                        {review.climb && review.climb.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 mt-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                    <div className="text-center">
                        <StarRatings
                          rating={review.rating}
                          starDimension='25px'
                          starRatedColor='rgba(255,215,0)'
                        />
                      </div>
                      <div className="pt-4 text-gray-700 text-base whitespace whitespace-preline">{review.review} </div>
                      {/* <div>{review.rating}</div> */}

                      <div className="text-blue-800 pt-3">By: {review.user && review.user.username}</div>
                      
                    </div>
                  </div>
                </div>
                {this.props.currentUser && this.props.currentUser.id == review.user_id && <div className="flex flex-row justify-evenly m-2 mb-5 pb-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => this.updateModal(review.id)}>Update Review</button>
                  <UpdateReview

                    id={review.id}
                    
                    update={this.state.update}
                    hideModal={this.hideUpdateModal}
                    handleUpdate={this.updateReview}
                    reviewItem={reviewItem}
                    info={info}
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => this.deleteClimb(review.id)}> Delete Review</button>

                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Add Photo </button> */}
                </div>}
              </div>
            </div>
          })}
        </div>
      </div>

    )
  }
}
export default withRouter(Reviews)

