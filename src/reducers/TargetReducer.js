import _ from 'lodash'
import {FETCH_TARGETS, FETCH_TARGET, DELETE_TARGET, EDIT_TARGET, GET_QUOTES} from '../actions'

export default function(state = {}, action) {
  switch (action.type){
    case DELETE_TARGET:
      return _.omit(state, action.payload)
    case EDIT_TARGET:
      return {[action.payload] : action.payload}
    case FETCH_TARGET:
      return {...state, [action.payload.data.id] : action.payload.data}
    case FETCH_TARGETS:
      return _.mapKeys(action.payload.data, 'id')
    case GET_QUOTES:
      return(action.payload.data.dataset.data)
    default:
      return state
  }
}