import api from './api-helper'

//get all
export const getClimbs = async (state_id) => {
  const resp = await api.get(`/states/${state_id}/climbs`)
  return resp.data 
}

//get one
export const getClimb = async (state_id,climb_id) => {
  const resp = await api.get(`/states/${state_id}/climbs/${climb_id}`)
  return resp.data
}


//post
export const postClimb = async (state_id, climbData) => {
  const resp = await api.post(`/states/${state_id}/climbs`, { climb: climbData })
  return resp.data 
}

//delete

export const deleteClimb = async (climb_id) => {
  const resp = await api.delete(`states/a/climbs/${climb_id}`)
  return resp.data
}