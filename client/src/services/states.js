import api from './api-helper'

export const getStates = async () => {
  const resp = await api.get('/states');
  return resp.data
}

export const getState = async (id) => {
  const resp = await api.get(`states/${id}`)
  return resp.data
}