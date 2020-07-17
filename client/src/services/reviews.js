import api from './api-helper'

// export const getReviews = async (state_id,climb_id) => {
//   const response = await api.get(`/states/${state_id}/climbs/${climb_id}/reviews`)
//   return response.data
// }

export const getReviews = async (climb_id) => {
  const response = await api.get(`/states/i/climbs/${climb_id}/reviews`)
  return response.data
}

export const postReview = async (climb_id, reviewData) => {
  const response = await api.post(`/climbs/${climb_id}/reviews`, { review: reviewData })
  return response.data
}

export const putReview = async (review_id, reviewData) => {
  const response = await api.put(`/reviews/${review_id}`, { review: reviewData })
  return response.data 
}


export const deleteReview = async (review_id) => {
  const resp = await api.delete(`/reviews/${review_id}`)
  return resp.data
}
//full crud