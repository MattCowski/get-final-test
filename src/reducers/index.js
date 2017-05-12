import { combineReducers } from 'redux'
import activityData from '../activity_data.json'
import transactionData from '../transaction_data.json'
import * as selectors from '../selectors'

export function transaction(state={id:null}, action) {
  switch (action.type) {
    case 'SET_SELECTED_ID':
      return {...state, ...selectors.getTransactionById(action.id)[0]}
    case 'CLEAR_TRANSACTION_ID':
      return {...state, id:null}
    default:
      return state
  }
}

export function activities(state=activityData, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  activities,
  transaction,
})
