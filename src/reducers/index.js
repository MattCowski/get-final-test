import { combineReducers } from 'redux'
import activityData from '../activity_data.json'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function transaction(state={id:null}, action) {
  switch (action.type) {
    case 'SET_SELECTED_ID':
      return {...state, id: action.id}
    default:
      return state
  }
}


function activities(state=activityData, action) {
  return state
}



export default combineReducers({
  activities,
  counter,
  transaction
})
