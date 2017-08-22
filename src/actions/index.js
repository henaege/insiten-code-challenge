import axios from 'axios'

export const FETCH_TARGETS = 'fetch_targets'
export const CREATE_TARGET = 'create_target'
export const FETCH_TARGET = 'fetch_target'
export const DELETE_TARGET = 'delete_target'
export const EDIT_TARGET = 'edit_target'
export const GET_QUOTES = 'get_quotes'

const ROOT_URL = 'http://localhost:3000/targets'
const API_KEY = 'M2KAZQ5IHI3XXY1J'

export function fetchTargets(config){
  const request = axios.get(`${ROOT_URL}`)
  return {
    type: FETCH_TARGETS,
    payload: request
  }
}

export function createTarget(values, callback){
  const request = axios.post(`${ROOT_URL}/`, values)
    .then(()=> callback())

  return {
    type: CREATE_TARGET,
    payload: request
  }
}

export function fetchTarget(id){
  const request = axios.get(`${ROOT_URL}/${id}`)
  return {
    type: FETCH_TARGET,
    payload: request
  }
}

export function editTarget(values, id, callback){
  const request = axios.patch(`${ROOT_URL}/${id}`, values)
    .then(()=> callback())
  return {
    type: EDIT_TARGET,
    payload: request
  }
}

export function deleteTarget(id, callback){
  const request = axios.delete(`${ROOT_URL}/${id}`)
    .then(()=> callback())
  return {
    type: DELETE_TARGET,
    payload: id
  }
}

export function getStockData(ticker){
  const request = axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${ticker}&apikey=${API_KEY}`)
  return {
    type: GET_QUOTES,
    payload: request
  }
}